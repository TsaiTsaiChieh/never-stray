import {Connection} from 'typeorm'

import {connection} from '../config/database'
import {Shelter} from '../entity/shelter.entity'
import shelters from '../JSON/shelters.json'
import {ShelterRepository} from '../repository/shelter.repository'
import {AppError} from '../utils/app-error'

/** @class ShelterInitData */
class ShelterInitData {
  public shelters: ShelterData[] = shelters
  private connection: Connection
  private repository: ShelterRepository

  /** Builder */
  async builder() {
    this.connection = await connection(process.env.NODE_ENV)
    this.repository = new ShelterRepository()
  }

  /** Destructor */
  async destroy() {
    this.connection.close()
  }

  /** Find exist data */
  /**
   * @return {Promise<number[]>}
   */
  async findData(): Promise<number[]> {
    try {
      const insertIdx: number[] = []
      await Promise.all(
        shelters.map(async (ele, i) => {
          const result = await this.repository.findOne({id: ele.id})
          if (!result) insertIdx.push(i)
          else console.log(`=== ${result.name} already in area table ===`)
        }),
      )
      return Promise.resolve(insertIdx)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  /** Upsert data */
  /**
   * @param  {number[]} insertIdx
   * @return {Shelter<Area[]>}
   */
  async upsertData(insertIdx: number[]): Promise<Shelter[]> {
    try {
      const data: Shelter[] = []
      insertIdx.map((i) => {
        data.push({
          id: shelters[i].id,
          name: shelters[i].name,
        })
      })
      const result = await this.repository.saveMany(data)
      if (result) console.info(`=== Saved ${JSON.stringify(result)} ===`)
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

/** Initial shelter data */
async function initShelterData(): Promise<void> {
  try {
    const shelterInitData = new ShelterInitData()
    await shelterInitData.builder()
    const insertIdx = await shelterInitData.findData()
    await shelterInitData.upsertData(insertIdx)
    await shelterInitData.destroy()
    return
  } catch (error) {
    throw new AppError(error)
  }
}

initShelterData()
