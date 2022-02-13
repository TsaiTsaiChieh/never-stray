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

  /** upsert */
  async upsertData() {
    try {
      const data: Area[] = []
      areas.map(async (ele) => {
        data.push({
          id: ele.id,
          region: <Region> ele.region,
          name: ele.name,
        })
      })
      const result = await this.repository.saveMany(data)
      console.info(`=== Saved ${JSON.stringify(result)} ===`)
    } catch (error) {
      throw new AppError(error)
    }
  }
}
/** Initial area data */
async function initAreaData() {
  const areaInitData = new AreaInitData()
  await areaInitData.builder()
  await areaInitData.upsertData()
  await areaInitData.destroy()
  return
}

initAreaData()
