
import axios, {AxiosResponse} from 'axios'
import {Connection, getConnectionManager} from 'typeorm'

import {Pet, Ref, Status} from '../entity/pet.entity'
import {PetRepository} from '../repository/pet.repository'
import {AppError, AxiosError, DBError} from '../utils/app-error'
import {
  cityConverter,
  petAgeConverter,
  petColorConverter,
  petKindConverter,
  petSexConverter,
  petStatusConverter,
  shelterConverter,
  ternaryConverter,
} from '../utils/value-converter'

/** @class ShelterJob */
class ShelterJob {
  public url: string = process.env.NATIONAL_ANIMAL_SHELTER!
  protected connection: Connection
  protected repository: PetRepository
  private batch: number = 3

  /** Builder */
  async builder(): Promise<void> {
    this.connection = await getConnectionManager().get().connect()
    this.repository = new PetRepository()
  }

  /** Destructor */
  destructor(): void {
    this.connection.close()
  }

  /**
   * 更新屬於政府收容所且狀態未知的寵物資訊
   *
   * @return {Promise<void>}
   */
  async updateUnknownStatus(): Promise<void> {
    try {
      const result = await this.repository.find({
        status: Status.UNKNOWN,
        ref: Ref.GOV,
      })
      let unknownCount = result ? result.length : 0

      for (const ele of result) {
        const res: AxiosResponse<ShelterAPIDataType[]> = await axios.get(
          `${this.url}&animal_id=${ele.sub_id}`,
        )
        const data: ShelterAPIDataType = res.data[0]
        if (data) {
          await this.repository.update(
            {sub_id: ele.sub_id, accept_num: ele.accept_num},
            {
              city_id: cityConverter(data.animal_area_pkid),
              shelter_id: shelterConverter(data.animal_shelter_pkid),
              kind: petKindConverter(data.animal_kind),
              sex: petSexConverter(data.animal_sex),
              color: petColorConverter(data.animal_colour),
              age: petAgeConverter(data.animal_age),
              ligation: ternaryConverter(data.animal_sterilization),
              rabies: ternaryConverter(data.animal_bacterin),
              status: petStatusConverter(data.animal_status),
              remark: data.animal_remark,
              phone: data.shelter_tel,
              image: [data.album_file],
              created_at: data.animal_createtime ?
                new Date(data.animal_createtime) :
                new Date(),
            },
          )
          unknownCount -= 1
          console.info(
            `=== Update unknown status: [${ele.sub_id}, ${ele.accept_num}] ===`,
          )
        }
      }
      console.info(`There are still ${unknownCount} unknown status`)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(new AppError(error))
    }
  }

  /**
   * 取得狀態為待認養的動物資料
   *
   * @return {Promise<ShelterAPIDataType[]>}
   */
  async getData(): Promise<ShelterAPIDataType[]> {
    const allData: ShelterAPIDataType[] = []
    let loopFlag: boolean = true

    try {
      for (let page = 0; loopFlag; page++) {
        const res: AxiosResponse<ShelterAPIDataType[]> = await axios.get(
          `${this.url}&$top=${this.batch}&$skip=${this.batch * page
          }&animal_status=OPEN`,
        )
        const data: ShelterAPIDataType[] = res.data
        if (!data.length) loopFlag = false
        data.forEach((ele) => {
          // Because shelters need the values of animal_id and
          // animal_subid to be linked
          if (ele.animal_id && ele.animal_subid) {
            allData.push(ele)
          }
        })
      }
      return Promise.resolve(allData)
    } catch (error) {
      return Promise.reject(new AxiosError(error))
    }
  }

  /**
   * 更新動物的資料
   *
   * 搜尋屬於政府收容所的寵物資料，若未在狀態為待認領的 API 裡，則狀態改為未知，
   * 反之，更新資料，並回傳需要新增的資料
   *
   * @param  {ShelterAPIDataType[]} data
   * @return {Promise<ShelterAPIDataType[]>}
   */
  async updatePetInfo(
    data: ShelterAPIDataType[],
  ): Promise<ShelterAPIDataType[]> {
    // Get all animal ids from API
    const ids: number[] = data.map((ele) => ele.animal_id)
    // Record IDs which been updated
    const updatedIds: number[] = []
    // Get the pet data from shelter that are open from DB
    const result: Pet[] = await this.repository.find({
      status: Status.OPEN,
      ref: Ref.GOV,
    })

    try {
      for (const ele of result) {
        // Returns the index of the first occurrence of a value in an array,
        // or - 1 if it is not present.
        const idxOfData = ids.indexOf(ele.sub_id)
        if (idxOfData === -1) {
          // Update status to unknown
          await this.repository.update(
            {sub_id: ele.sub_id, accept_num: ele.accept_num},
            {status: Status.UNKNOWN},
          )
        } else {
          // Update its information
          const dataByIdx: ShelterAPIDataType = data[idxOfData]
          await this.repository.update(
            {sub_id: ele.sub_id, accept_num: ele.accept_num},
            {
              city_id: cityConverter(dataByIdx.animal_area_pkid),
              shelter_id: shelterConverter(dataByIdx.animal_shelter_pkid),
              kind: petKindConverter(dataByIdx.animal_kind),
              sex: petSexConverter(dataByIdx.animal_sex),
              color: petColorConverter(dataByIdx.animal_colour),
              age: petAgeConverter(dataByIdx.animal_age),
              ligation: ternaryConverter(dataByIdx.animal_sterilization),
              rabies: ternaryConverter(dataByIdx.animal_bacterin),
              status: petStatusConverter(dataByIdx.animal_status),
              remark: dataByIdx.animal_remark,
              phone: dataByIdx.shelter_tel,
              image: [dataByIdx.album_file],
              created_at: dataByIdx.animal_createtime ?
                new Date(dataByIdx.animal_createtime) :
                new Date(),
            },
          )
        }
        updatedIds.push(ele.sub_id)
      }
      console.info(`=== Update ${updatedIds.length} data`)
      // Filter out the ID which already been updated
      data = data.filter((ele) => !updatedIds.includes(ele.animal_id))
      console.info(`=== ${data.length} data should be stored ===`)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(new DBError(error))
    }
  }

  /**
   * 儲存寵物的資訊
   *
   * @param  {ShelterAPIDataType[]} data Which should be saved
   * @return {Promise<void>}
   */
  async saveData(data: ShelterAPIDataType[]): Promise<void> {
    const petData: Pet[] = []
    data.forEach((ele) => {
      petData.push({
        sub_id: ele.animal_id,
        accept_num: ele.animal_subid,
        ref: Ref.GOV,
        city_id: cityConverter(ele.animal_area_pkid),
        shelter_id: shelterConverter(ele.animal_shelter_pkid),
        kind: petKindConverter(ele.animal_kind),
        sex: petSexConverter(ele.animal_sex),
        color: petColorConverter(ele.animal_colour),
        age: petAgeConverter(ele.animal_age),
        ligation: ternaryConverter(ele.animal_sterilization),
        rabies: ternaryConverter(ele.animal_bacterin),
        status: petStatusConverter(ele.animal_status),
        remark: ele.animal_remark,
        phone: ele.shelter_tel,
        image: [ele.album_file],
        created_at: ele.animal_createtime ?
          new Date(ele.animal_createtime) :
          new Date(),
      })
    })
    try {
      const result = await this.repository.saveMany(petData)
      if (result) console.info(`=== Saved ${result.length} data ===`)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(new DBError(error))
    }
  }
}

/**
 * Get shelter data (main function)
 *
 * @return {Promise<void>}
 */
export async function getShelterData(): Promise<void> {
  const shelterJob = new ShelterJob()

  try {
    await shelterJob.builder()
    await shelterJob.updateUnknownStatus()
    const data: ShelterAPIDataType[] = await shelterJob.getData()
    const dataShouldBeSaved: ShelterAPIDataType[] =
      await shelterJob.updatePetInfo(data)
    await shelterJob.saveData(dataShouldBeSaved)
  } catch (error) {
    throw error
  } finally {
    shelterJob.destructor()
  }
}

