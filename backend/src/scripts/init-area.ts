import {Connection} from 'typeorm'

import {connection} from '../config/database'
import {Area, Region} from '../entity/area.entity'
import areas from '../JSON/areas.json'
import {AreaRepository} from '../repository/area.repository'
import {AppError} from '../utils/app-error'

/** @class AreaInitData*/
class AreaInitData {
  public areas: AreaData[] = areas
  private connection: Connection
  private repository: AreaRepository

  /** Builder */
  async builder() {
    this.connection = await connection(process.env.NODE_ENV)
    this.repository = new AreaRepository()
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
        areas.map(async (ele, i) => {
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
   * @return {Promise<Area[]>}
   */
  async upsertData(insertIdx: number[]): Promise<Area[]> {
    try {
      const data: Area[] = []
      insertIdx.map((i) => {
        data.push({
          id: areas[i].id,
          region: <Region>areas[i].region,
          name: areas[i].name,
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

/** Initial area data */
async function initAreaData(): Promise<void> {
  try {
    const areaInitData = new AreaInitData()
    await areaInitData.builder()
    const insertIdx = await areaInitData.findData()
    await areaInitData.upsertData(insertIdx)
    await areaInitData.destroy()
  } catch (error) {
    throw new AppError(error)
  }
}

initAreaData()
