import httpStatus from 'http-status'
import puppeteer, {Browser, HTTPResponse, Page} from 'puppeteer'

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
import {getElementValue, getLinks, getSources} from '../utils/helper'
import {cityNameConverter} from '../utils/value-converter'

/** @class MeetPetJob */
class MeetPetJob {
  public url: string = process.env.MEET_PET!
  public kind: Kind
  protected repository: PetRepository
  protected browser: Browser
  protected page: Page

  /**
   * @constructor
   *
   * @param  {PetKindType} kind
   */
  constructor(kind: Kind) {
    this.kind = kind
    this.repository = new PetRepository()
  }

  /** Builder */
  async builder(): Promise<void> {
    this.browser = await puppeteer.launch()
    this.page = await this.browser.newPage()
  }

  /** Destructor */
  destructor(): void {
    this.browser.close()
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
        kind: this.kind,
      })
      let unknownCount = result ? result.length : 0

      for (const ele of result) {
        const res: HTTPResponse = await this.page.goto(
          `${this.url}/content/${ele.sub_id}`,
        )
        if (res.status() === httpStatus.OK) {
          const petData = await this.getDataByPage(ele.sub_id)
          const updateResult = await this.repository.update(
            {sub_id: ele.sub_id},
            {...petData},
          )
          if (updateResult.affected) unknownCount -= 1
          console.info(`=== Update unknown status: [${ele.sub_id}] ===`)
        }
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
    let linkIDs: number[] = []
    const url = `${this.url}/pets/${this.kind}`
    try {
      await this.page.goto(url)
      const lastPage = await getElementValue(this.page, '.pager-last')

      // Switch page to get links
      for (let i = 0; i < Number(lastPage); i++) {
        await this.page.goto(`${url}?page=${i}`)

        const linkByPage = <string[]>(
          await getLinks(this.page, '.view-data-node-title > a')
        )
        const IDs = linkByPage.map((ele) =>
          parseInt(ele.replace('/content/', '')),
        )
        linkIDs = [...linkIDs, ...IDs]
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
   * 爬蟲來的資料去和資料庫中，是認養地圖且是該種類的寵物做對應，
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
      const result: Pet[] = await this.repository.find({
        ref: Ref.MAP,
        kind: this.kind,
      })

      for (const ele of data) {
        const idxOfData = result.findIndex((x) => x.sub_id === ele.sub_id)
        if (idxOfData !== -1) {
          await this.repository.update(
            {sub_id: ele.sub_id, ref: Ref.MAP}, {...ele})
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
    try {
      const url = `${this.url}/content/${linkID}`
      await this.page.goto(url)

      const cityText = <string>(
        await getElementValue(this.page, this.classNameMapping('county'))
      )
      const name = (await getElementValue(
        this.page,
        this.classNameMapping('pet-name'),
      ))!
        .replace('動物小名: ', '')
        .split(/[`~!@#$%^&*(（)）_|+\-=?;:：'",，。.、<>\{\}\[\]\\\/]/gi)[0]
        .trim()
      const ageText = (await getElementValue(
        this.page,
        this.classNameMapping('pet-age'),
      ))!.replace('動物的出生日（年齡）:', '')
      const ligationText = <string>(
        await getElementValue(this.page, this.classNameMapping('pet-medical'))
      )
      const title = <string>(await getElementValue(this.page, 'h1.title'))
      const look = (await getElementValue(
        this.page,
        this.classNameMapping('pet-look'),
      ))!.replace('簡單描述: ', '')
      const personality = <string>(
        (await getElementValue(
          this.page,
          this.classNameMapping('pet-habitate'),
        ))!.replace('動物個性略述: ', '')
      )
      let sex = this.sexDetection(title)
      if (sex === Sex.UNKNOWN) sex = this.sexDetection(look)
      if (sex === Sex.UNKNOWN) sex = this.sexDetection(personality)

      const now = new Date()
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
        remark: <string>(
          await getElementValue(
            this.page,
            this.classNameMapping('limitation-desc'),
          )
        ),
        phone: <string>(
          await getElementValue(this.page, this.classNameMapping('tel'))
        ),
        image: <string[]>(
          await getSources(
            this.page,
            `${this.classNameMapping('pets-image')} > img`,
          )
        ),
        created_at: now,
        updated_at: now,
      }
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
}

/**
 * Get meet pet website data by specific kind
 *
 * @param  {Kind} kind
 * @return {Promise<void>}
 */
async function getMeetPetDataByKind(kind: Kind): Promise<void> {
  const meetPetJob = new MeetPetJob(kind)
  console.info(`=== Meet-Pet-Job [${kind}] start ===`)

  try {
    await meetPetJob.builder()
    await meetPetJob.updateUnknownStatus()
    const linkIDs = await meetPetJob.getPetLinks()
    const data: Pet[] = await meetPetJob.collectData(linkIDs)
    const dataShouldBeSaved: Pet[] = await meetPetJob.updatePetInfo(data)
    await meetPetJob.saveData(dataShouldBeSaved)
  } catch (error) {
    return Promise.reject(error)
  } finally {
    meetPetJob.destructor()
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
    await getMeetPetDataByKind(Kind.DOG)
  } catch (error) {
    throw error
  }
}
