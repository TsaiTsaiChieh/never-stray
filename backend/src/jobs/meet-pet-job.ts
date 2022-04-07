/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import cheerio from 'cheerio'

import {
  Age,
  Kind,
  Pet,
  Ref,
  Sex,
  Status,
  Ternary,
} from '../entity/pet.entity'
import {ShelterID} from '../entity/shelter.entity'
import {PetRepository} from '../repository/pet.repository'
import {AppError, DBError} from '../utils/app-error'
import {checkFolderContents, putObject} from '../utils/aws-s3-actions'
import {cityNameConverter} from '../utils/value-converter'

/** @class MeetPetJob */
class MeetPetJob {
  public url: string = process.env.MEET_PET!
  public imgPath: string = process.env.MEET_PET_IMG_PATH!
  public kind: Kind
  protected repository: PetRepository
  public imgFolder: string = 'meetpets'

  /**
   * @constructor
   *
   * @param  {PetKindType} kind
   */
  constructor(kind: Kind) {
    this.kind = kind
    this.repository = new PetRepository()
  }

  /**
   * 更新屬於認養地圖所且狀態未知的寵物資訊
   *
   * @return {Promise<void>}
   */
  async updateUnknownStatus(): Promise<void> {
    try {
      const result: Pet[] = await this.repository.find({
        status: Status.UNKNOWN,
        ref: Ref.MAP,
      })
      let unknownCount = result ? result.length : 0

      for (const ele of result) {
        const petData = await this.getDataByPage(ele.sub_id)
        const updateResult = await this.repository.update(
          {sub_id: ele.sub_id},
          {...petData},
        )
        if (updateResult.affected) unknownCount -= 1
        console.info(`=== Update unknown status: [${ele.sub_id}] ===`)
      }
      console.info(`There are still ${unknownCount} unknown status`)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(new AppError(error))
    }
  }

  /**
   * 蒐集所有寵物詳細資料的網址
   *
   * @return {Promise<number[]>}
   */
  async getPetLinks(): Promise<number[]> {
    const linkIDs: number[] = []
    const url = `${this.url}/pets/${this.kind}`
    try {
      const $ = await this.getCheerioRoot(url)
      // const lastPage: string = $('.pager-last').first().text()
      const lastPage = 1
      // Switch page to get links
      for (let i = 0; i < Number(lastPage); i++) {
        const $ = await this.getCheerioRoot(`${url}?page=${i}`)
        $('.view-data-node-title')
          .find('a')
          .each((_, ele) => {
            linkIDs.push(
              parseInt($(ele).attr('href')!.replace('/content/', '')),
            )
          })
      }
      return Promise.resolve(linkIDs)
    } catch (error) {
      return Promise.reject(new AppError(error))
    }
  }

  /**
   * 蒐集寵物的詳細資料
   *
   * @param  {number[]} linkIDs
   */
  async collectData(linkIDs: number[]) {
    const allData: Pet[] = []
    linkIDs = [linkIDs[0]]
    try {
      for (const ele of linkIDs) {
        const petData: Pet = await this.getDataByPage(ele)
        allData.push(petData)
      }
      return Promise.resolve(allData)
    } catch (error) {
      return Promise.reject(new AppError(error))
    }
  }

  /**
   * 更新寵物的資訊
   *
   * 爬蟲來的資料去和資料庫中，是認養地圖的資料做對應，
   * 若未在資料庫的，則不濾除掉，反之，更新資料，最後回傳需要新增的資料
   *
   * @param  {Pet[]} data
   * @return {Promise<Pet[]>}
   */
  async updatePetInfo(data: Pet[]): Promise<Pet[]> {
    try {
      // Record IDs which been updated
      const updatedIds: number[] = []
      // Get the pet data from shelter that are open from DB
      const result: Pet[] = await this.repository.find({ref: Ref.MAP})

      for (const ele of data) {
        const idxOfData = result.findIndex((x) => x.sub_id === ele.sub_id)
        if (idxOfData !== -1) {
          await this.repository.update(
            {sub_id: ele.sub_id, ref: Ref.MAP},
            {...ele},
          )
          updatedIds.push(ele.sub_id)
        }
      }
      console.info(`=== Update ${updatedIds.length} data ===`)
      // Filter out the ID which already been updated
      data = data.filter((ele) => !updatedIds.includes(ele.sub_id))
      console.info(`=== ${data.length} data should be stored ===`)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(new DBError(error))
    }
  }

  /**
   * 儲存寵物的資訊
   *
   * @param  {Pet[]} data
   * @return {Promise<void>}
   */
  async saveData(data: Pet[]): Promise<void> {
    try {
      const result = await this.repository.saveMany(data)
      if (result) console.info(`=== Saved ${result.length} data ===`)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(new DBError(error))
    }
  }

  /**
   * Get crawler response from callback
   *
   * @param  {string} url
   * @return {Promise<void>}
   */
  async getCheerioRoot(url: string): Promise<cheerio.Root> {
    try {
      const {data} = await axios.get(url)
      const $ = cheerio.load(data)
      return Promise.resolve($)
    } catch (error) {
      return Promise.reject(new AppError(error))
    }
  }

  /**
   * Return class name by given field
   *
   * @param  {string} fieldName
   * @return {string}
   */
  classNameMapping(fieldName: string): string {
    return `.field-field-${fieldName} > .field-items > .field-item`
  }

  /**
   * Get data by given URL
   *
   * @param  {number} linkID
   * @return {Promise<Pet>} petData
   */
  async getDataByPage(linkID: number): Promise<Pet> {
    const url = `${this.url}/content/${linkID}`
    const images: string[] = []
    let imgsFromS3: string[] = []

    try {
      const $ = await this.getCheerioRoot(url)
      const folderContents = await checkFolderContents({
        MaxKeys: 3,
        Prefix: `${this.imgFolder}/${linkID}`,
      }) as unknown as string[]
      console.log('folderContents:', folderContents, '---')

      const cityText = $(this.classNameMapping('county')).text()
      const name = $(this.classNameMapping('pet-name'))
        .text()
        .replace('動物小名: ', '')
        .trim()
      const ageText = $(this.classNameMapping('pet-age'))
        .text()
        .replace('動物的出生日（年齡）:', '')
      const title = $('h1.title').text()
      const look = $(this.classNameMapping('pet-look'))
        .text()
        .replace('簡單描述: ', '')
      const personality = $(this.classNameMapping('pet-habitate'))
        .text()
        .replace('動物個性略述: ', '')
      const ligationText = $(this.classNameMapping('pet-medical')).text()
      let sex = this.sexDetection(title)
      if (sex === Sex.UNKNOWN) sex = this.sexDetection(look)
      if (sex === Sex.UNKNOWN) sex = this.sexDetection(personality)
      // Check if images exist from linkID folder, get the file URL from S3
      // otherwise, upload image to S3
      if (!folderContents.length) {
        $(`${this.classNameMapping('pets-image')}`)
          .find('img')
          .each((_, ele) => images.push($(ele).attr('src')!))
        imgsFromS3 = await Promise.all(
          images.map(
            async (ele): Promise<string> =>
              await this.uploadImgUrlToBucket(
                ele, `${this.imgFolder}/${linkID}`,
              ),
          ),
        )
      } else imgsFromS3 = folderContents!

      const petData: Pet = {
        sub_id: linkID,
        accept_num: linkID.toString(),
        name,
        ref: Ref.MAP,
        city_id: cityNameConverter(cityText),
        shelter_id: ShelterID.NONE,
        kind: this.kind,
        sex,
        color: '',
        age: ageText.includes('年') ?
          Age.ADULT :
          ageText.includes('週') ?
            Age.CHILD :
            Age.UNKNOWN,
        ligation: ligationText.includes('是') ?
          Ternary.TRUE :
          ligationText.includes('否') ?
            Ternary.FALSE :
            Ternary.UNKNOWN,
        rabies: Ternary.UNKNOWN,
        title,
        status: this.statusDetection(title),
        remark: $(this.classNameMapping('limitation-desc')).text(),
        phone: $(this.classNameMapping('tel')).text(),
        image: imgsFromS3,
        updated_at: new Date(),
      }
      console.log('petData:', petData, '---')
      return Promise.resolve(petData)
    } catch (error) {
      return Promise.reject(new AppError(error))
    }
  }

  /**
   * Sex auto detection
   *
   * @param  {string} content
   * @return {Sex}
   */
  sexDetection(content: string): Sex {
    if (
      content.includes('兄妹') ||
      content.includes('姊弟') ||
      content.includes('姐弟') ||
      (content.includes('公') && content.includes('母'))
    ) {
      return Sex.UNKNOWN
    } else if (
      content.includes('妹') ||
      content.includes('女') ||
      content.includes('母') ||
      content.includes('她') ||
      content.includes('姐') ||
      content.includes('姊') ||
      content.includes('妞')
    ) {
      return Sex.FEMALE
    } else if (
      content.includes('弟') ||
      content.includes('男') ||
      content.includes('公') ||
      content.includes('帥') ||
      content.includes('哥')
    ) {
      return Sex.MALE
    } else return Sex.UNKNOWN
  }

  /**
   * Status auto detection
   *
   * @param  {string} title
   * @return {Status}
   */
  statusDetection(title: string): Status {
    if (
      title.includes('已送養') ||
      title.includes('已送出') ||
      title.includes('已去') ||
      title.includes('已出養') ||
      title.includes('已認養') ||
      title.includes('已領養') ||
      title.includes('已被') ||
      title.includes('已經找到') ||
      title.includes('結案') ||
      title.includes('已有人認養') ||
      title.includes('結束') ||
      title.includes('已找到') ||
      title.includes('已有緣') ||
      title.includes('到認養')
    ) {
      return Status.ADOPTED
    } else if (
      title.includes('暫不開放') ||
      title.includes('暫停送養') ||
      title.includes('已被預定') ||
      title.includes('已原放')
    ) {
      return Status.OTHER
    } else return Status.OPEN
  }

  /**
   * Upload stream image to S3 bucket
   *
   * @param  {string} imgUrl
   * @param  {string} key
   */
  async uploadImgUrlToBucket(imgUrl: string, key: string) {
    try {
      const {data} = await axios.get(imgUrl, {
        responseType: 'stream',
      })
      const imgName = imgUrl
        .substring(0, imgUrl.lastIndexOf('.'))
        .replace(this.imgPath, '')
      const {Location} = await putObject({
        Key: `${key}/${imgName}`,
        Body: data,
        ContentType: 'image/jpeg',
      })
      return Promise.resolve(Location)
    } catch (error) {
      return Promise.reject(new AppError(error))
    }
  }
}

/**
 * Get meet pet website data by specific kind
 *
 * @param  {Kind} kind
 * @return {Promise<void>}
 */
async function getMeetPetDataByKind(kind: Kind): Promise<void> {
  const meetPetJob = new MeetPetJob(kind)
  console.info(`=== Meet-Pet-Job [${kind}] start at ${new Date()}===`)

  try {
    // await meetPetJob.updateUnknownStatus()
    const linkIDs = await meetPetJob.getPetLinks()
    const data: Pet[] = await meetPetJob.collectData(linkIDs)
    const dataShouldBeSaved: Pet[] = await meetPetJob.updatePetInfo(data)
    await meetPetJob.saveData(dataShouldBeSaved)
  } catch (error) {
    return Promise.reject(error)
  }
}

/**
 * Get meet pet data (main function)
 *
 * @return {Promise<void>}
 */
export async function getMeetPetData(): Promise<void> {
  try {
    await getMeetPetDataByKind(Kind.CAT)
    // await getMeetPetDataByKind(Kind.DOG)
  } catch (error) {
    throw error
  }
}
