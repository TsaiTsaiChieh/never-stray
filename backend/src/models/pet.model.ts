import {Pet} from '../entity/pet.entity'
import {PetRepository} from '../repository/pet.repository'
import {RepackageError} from '../utils/app-error'
import {deepCopy} from '../utils/helper'

/** @class PetModel */
export class PetModel {
  private repository: PetRepository

  /** @constructor */
  constructor() {
    this.repository = new PetRepository()
  }

  /**
   * Search pet by query
   *
   * @param  {PetSearchQueryType} query
   * @return {Promise<PetSearchReturningType>}
   */
  async searchPetAndCount(
    query: PetSearchQueryType,
  ): Promise<PetSearchReturningType> {
    try {
      const result: [Pet[], number] =
        await this.repository.findByFiltersAndCount(query)
      const cleanData: PetSearchReturningType =
        await repackagePetData(result, query.page!, query.limit!)
      return Promise.resolve(cleanData)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

/**
 * Repackage pet data
 *
 * @param  {[Pet[], number]} result Pet information and count
 * @return {Promise<[PetSearchReturningType[], number]>}
 */
function repackagePetData(
  result: [Pet[], number],
  page: number,
  limit: number,
): Promise<PetSearchReturningType> {
  try {
    const copyResult = deepCopy(result)
    const cleanData: PetSearchReturningType = {
      page: {
        current: page,
        size: limit,
        total: copyResult[1],
        count: Math.ceil(copyResult[1] / limit),
      }
    } as PetSearchReturningType


    const petData: PetInfoType[] = copyResult[0]
    petData.map((ele) => {
      ele.region = ele.city!.region
      ele.city_name = ele.city!.name
      ele.shelter_name = ele.shelter!.name
      delete ele.city
      delete ele.shelter
    })
    cleanData.pet = petData
    cleanData.page = {
      current: page,
      size: limit,
      total: copyResult[1],
      count: Math.ceil(copyResult[1] / limit),
    }
    return Promise.resolve(cleanData)
  } catch (error) {
    return Promise.reject(new RepackageError(error.stack))
  }
}
