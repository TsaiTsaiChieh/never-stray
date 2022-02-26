import {SelectQueryBuilder} from 'typeorm'
import {Pet} from '../entity/pet.entity'
import {DBError} from '../utils/app-error'
import {BasicRepository} from '../utils/basic-repository'

/** @class PetRepository */
export class PetRepository extends BasicRepository<Pet> {
  /** @constant */
  constructor() {
    super(Pet)
  }

  /**
   * Find pet by filters
   *
   * @param  {PetSearchQueryType} query
   * @return {Promise<[Pet[], number]>} Pet information and count
   */
  async findByFiltersAndCount(
    query: PetSearchQueryType,
  ): Promise<[Pet[], number]> {
    try {
      let queryBuilder: SelectQueryBuilder<Pet> = this.repository
        .createQueryBuilder('pet')
        .leftJoinAndSelect('pet.city', 'area')
        .leftJoinAndSelect('pet.shelter', 'shelter')
      if (query.status) {
        queryBuilder.andWhere('pet.status = :status', {status: query.status})
      }
      if (query.city_id) {
        queryBuilder.andWhere('pet.city_id = :city_id', {
          city_id: query.city_id,
        })
      }
      if (query.region) {
        queryBuilder.andWhere('area.region = :region', {
          region: query.region,
        })
      }
      if (query.shelter_id) {
        queryBuilder.andWhere('pet.shelter_id = :shelter_id', {
          shelter_id: query.shelter_id,
        })
      }
      if (query.color) {
        queryBuilder.andWhere('pet.color = :color', {color: query.color})
      }
      if (query.kind) {
        queryBuilder.andWhere('pet.kind = :kind', {kind: query.kind})
      }
      if (query.age) {
        queryBuilder.andWhere('pet.age = :age', {age: query.age})
      }
      if (query.sex) {
        queryBuilder.andWhere('pet.sex = :sex', {sex: query.sex})
      }
      if (query.ref) {
        queryBuilder.andWhere('pet.ref = :ref', {ref: query.ref})
      }
      if (query.order_key) {
        queryBuilder.orderBy(
          `pet.${query.order_key}`,
          `${query.ascend ? 'ASC' : 'DESC'}`,
        )
      }
      if (query.page) {
        queryBuilder = queryBuilder
          .offset((query.page - 1) * query.limit!)
          .limit(query.limit)
      }
      const result: [Pet[], number] = await queryBuilder.getManyAndCount()
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(new DBError(error.stack))
    }
  }
}
