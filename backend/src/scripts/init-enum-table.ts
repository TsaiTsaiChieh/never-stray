import {
  Connection,
  DeepPartial,
  getRepository,
  ObjectType,
  Repository,
} from 'typeorm'

import {connection} from '../config/database'
import {Area} from '../entity/area.entity'
import {Shelter} from '../entity/shelter.entity'
import Areas from '../JSON/areas.json'
import Shelters from '../JSON/shelters.json'
import {AppError} from '../utils/app-error'

/** @class InitData */
class InitData<T extends ObjectType<T>> {
  private entity: ObjectType<T>
  public rows: (IDNameType | AreaDataType)[]
  private connection: Connection
  protected repository: Repository<T>

  /**
   * @constructor
   *
   * @param  {ObjectType<T>} entity
   * @param  {(IDNameType | AreaDataType)[]} rows
   */
  constructor(entity: ObjectType<T>, rows: (IDNameType | AreaDataType)[]) {
    this.rows = rows
    this.entity = entity
  }

  /** Builder */
  async builder(): Promise<void> {
    this.connection = await connection()
    this.repository = getRepository(this.entity)
  }

  /** Destructor */
  destructor(): void {
    this.connection.close()
  }

  /**
   * Find exist data
   *
   * @return {Promise<number[]>}
   */
  async findData(): Promise<number[]> {
    try {
      const insertIdx: number[] = []
      await Promise.all(
        this.rows.map(async (ele, i) => {
          const result = await this.repository.findOne(ele.id)
          if (!result) insertIdx.push(i)
          else console.info(`=== ${result.name} already in area table ===`)
        }),
      )
      return Promise.resolve(insertIdx)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  /**
   * Upsert data
   *
   * @param  {number[]} insertIdx
   * @return {Promise<T[]>} result
   */
  async upsertData(insertIdx: number[]): Promise<T[]> {
    try {
      const data: DeepPartial<T>[] = []
      insertIdx.map((i) => {
        // type-cast
        const row = (this.rows[i] as unknown) as DeepPartial<T>
        data.push(row)
      })
      const result = await this.repository.save(data)
      if (result.length) {
        console.info(`=== Saved ${JSON.stringify(result)} ===`)
      }
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

/**
 * Init area enum table
 *
 * @return {Promise<void>}
 */
async function initAreaData(): Promise<void> {
  const areaInitData = new InitData(Area, Areas)
  try {
    await areaInitData.builder()
    const insertIdx: number[] = await areaInitData.findData()
    await areaInitData.upsertData(insertIdx)
    areaInitData.destructor()
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  } finally {
    areaInitData.destructor()
  }
}

/**
 * Init shelter enum table
 *
 * @return {Promise<void>}
 */
async function initShelterData(): Promise<void> {
  const shelterInitData = new InitData(Shelter, Shelters)
  try {
    await shelterInitData.builder()
    const insertIdx: number[] = await shelterInitData.findData()
    await shelterInitData.upsertData(insertIdx)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  } finally {
    shelterInitData.destructor()
  }
}

/** main */
(async () => {
  try {
    await initAreaData()
    await initShelterData()
  } catch (error) {
    throw new AppError(error)
  }
})()
