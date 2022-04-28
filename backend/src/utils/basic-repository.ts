import {
  FindConditions,
  FindOneOptions,
  getRepository,
  ObjectType,
  Repository,
  UpdateResult,
} from 'typeorm'
import {QueryDeepPartialEntity} from 'typeorm/query-builder/QueryPartialEntity'

/** @class BasicRepository */
export class BasicRepository<T> {
  protected repository: Repository<T>
  private entity: ObjectType<T>

  /**
   * @constructor
   * @param {ObjectType<T>} entity
   */
  constructor(entity: ObjectType<T>) {
    this.entity = entity
    this.repository = getRepository(entity)
  }

  /**
   * Saves a given entity in the database.
   * If entity does not exist in the database then inserts,
   * otherwise would throw duplicate key error
   *
   * @param {T} data Single data
   * @return {Promise<T>}
   */
  save(data: T): Promise<T> {
    return this.repository.save(data)
  }

  /**
   * Saves all given entities in the database.
   * If entity does not exist in the database then inserts,
   * otherwise would throw duplicate key error
   *
   * @param {T[]} data Multiple data
   * @return {Promise<T>}
   */
  saveMany(data: T[]): Promise<T[]> {
    return this.repository.save(data)
  }

  /**
   * Finds first entity that matches given conditions or options.
   *
   * @param {FindCondition<T>} [conditions] Used for find operations
   * @param {FindOneOptions<T>} [options] Special criteria, like: select, where,
   *        join, relations, order
   * @return {Promise<T | undefined>}
   */
  findOne(
    conditions?: FindConditions<T>,
    options?: FindOneOptions<T>,
  ): Promise<T | undefined> {
    return this.repository.findOne(conditions, options)
  }

  /**
   * Finds entities that match given conditions.
   *
   * @param {FindConditions<T>} [conditions] Used for find operations
   *
   * @return {Promise<T>}
   */
  find(conditions?: FindConditions<T>): Promise<T[]> {
    return this.repository.find(conditions)
  }

  /**
   * Updates entity partially. Entity can be found by a given conditions.
   * Does not check if entity exist in the database.
   *
   * @param  {FindConditions<T>} conditions
   * @param  {QueryDeepPartialEntity<T>} partialEntity
   * @return {Promise<UpdateResult>}
   */
  update(
    conditions: FindConditions<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return this.repository.update(conditions, partialEntity)
  }

  /**
   * Upsert single data
   *
   * @param  {T} data
   * @param  {FindOneOptions<T>} [options]
   */
  async upsertOne(data: T, options?: FindOneOptions<T>) {
    const result = await this.repository.findOne(data, options)

    return result ?
      this.repository.update(data, data) :
      this.repository.save(data)
  }
}
