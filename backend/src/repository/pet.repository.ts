import {SelectQueryBuilder} from 'typeorm'

import {CityID, Region} from '../entity/area.entity'
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
      if (query.id) {
        queryBuilder.where('pet.id = :id', {id: query.id})
      }

      if (query.status && query.status.length !== Object.keys(Status).length) {
        query.status.length > 1 ?
          queryBuilder.andWhere('pet.status IN (:statuses)', {
            statuses: query.status,
          }) :
          queryBuilder.andWhere('pet.status = :status', {
            status: query.status,
          })
      }
      if (
        query.city_id &&
        query.city_id.length !== Object.keys(CityID).length
      ) {
        query.city_id.length > 1 ?
          queryBuilder.andWhere('pet.city_id IN (:city_ids)', {
            city_ids: query.city_id,
          }) :
          queryBuilder.andWhere('pet.city_id = :city_id', {
            city_id: query.city_id,
          })
      }
      if (query.region && query.region.length !== Object.keys(Region).length) {
        query.region.length > 1 ?
          queryBuilder.andWhere('pet.region IN (:regions)', {
            regions: query.region,
          }) :
          queryBuilder.andWhere('area.region = :region', {
            region: query.region,
          })
      }
      if (
        query.shelter_id &&
        query.shelter_id.length !== Object.keys(ShelterID).length
      ) {
        query.shelter_id.length > 1 ?
          queryBuilder.andWhere('pet.shelter_id IN (:shelter_ids)', {
            shelter_ids: query.shelter_id,
          }) :
          queryBuilder.andWhere('pet.shelter_id = :shelter_id', {
            shelter_id: query.shelter_id,
          })
      }
      if (query.color) {
        query.color.length > 1 ?
          queryBuilder.andWhere('pet.color IN (:colors)', {
            colors: query.color,
          }) :
          queryBuilder.andWhere('pet.color = :color', {color: query.color})
      }
      if (query.kind && query.kind.length !== Object.keys(Kind).length) {
        query.kind.length > 1 ?
          queryBuilder.andWhere('pet.kind IN (:kinds)', {kinds: query.kind}) :
          queryBuilder.andWhere('pet.kind = :kind', {kind: query.kind})
      }
      if (query.age && query.age.length !== Object.keys(Age).length) {
        query.age.length > 1 ?
          queryBuilder.andWhere('pet.age IN (:ages)', {ages: query.age}) :
          queryBuilder.andWhere('pet.age = :age', {age: query.age})
      }
      if (query.sex && query.sex.length !== Object.keys(Sex).length) {
        query.sex.length > 1 ?
          queryBuilder.andWhere('pet.sex IN (:sexes)', {sexes: query.sex}) :
          queryBuilder.andWhere('pet.sex = :sex', {sex: query.sex})
      }
      if (query.ref && query.ref.length !== Object.keys(Ref).length) {
        query.ref.length > 1 ?
          queryBuilder.andWhere('pet.ref IN (:refs)', {refs: query.ref}) :
          queryBuilder.andWhere('pet.ref = :ref', {ref: query.ref})
      }
      if (
        query.ligation &&
        query.ligation.length !== Object.keys(Ternary).length
      ) {
        query.ligation.length > 1 ?
          queryBuilder.andWhere('pet.ligation IN (:ligations)', {
            ligations: query.ligation,
          }) :
          queryBuilder.andWhere('pet.ligation = :ligation', {
            ligation: query.ligation,
          })
      }
      if (query.keyword) {
        queryBuilder.andWhere('pet.remark LIKE :keyword', {
          keyword: `%${query.keyword}%`,
        })
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

  /**
   * Select distinct on color
   *
   * @return {Promise<PetColor[]>}
   */
  async getColors(): Promise<PetColor[]> {
    try {
      const result: PetColor[] = await this.repository
        .createQueryBuilder('pet')
        .select('pet.color')
        .distinct(true)
        .orderBy({'pet.color': 'ASC'})
        .getRawMany()
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(new DBError(error.stack))
    }
  }

  /**
   * Find pet information by ID
   * @param  {number} id
   * @return {Promise<Pet>}
   */
  async findOneById(id: number): Promise<Pet | undefined> {
    try {
      const result: Pet | undefined = await this.repository
        .createQueryBuilder('pet')
        .leftJoinAndSelect('pet.city', 'area')
        .leftJoinAndSelect('pet.shelter', 'shelter')
        .where('pet.id = :id', {id}).getOne()
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(new DBError(error.stack))
    }
  }
}
