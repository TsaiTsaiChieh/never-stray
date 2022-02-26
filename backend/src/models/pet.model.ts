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
   * @return {Promise<[PetSearchReturningType[], number]>}
   */
  async searchPetAndCount(
    query: PetSearchQueryType,
  ): Promise<[PetSearchReturningType[], number]> {
    try {
      const result: [Pet[], number] =
        await this.repository.findByFiltersAndCount(query)
      const cleanData: [PetSearchReturningType[], number] =
        await repackagePetData(result)
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
): Promise<[PetSearchReturningType[], number]> {
  try {
    const cleanData: [PetSearchReturningType[], number] = deepCopy(result)
    cleanData[0].map((ele) => {
      ele.region = ele.city!.region
      ele.city_name = ele.city!.name
      ele.shelter_name = ele.shelter!.name
      delete ele.city
      delete ele.shelter
    })
    return Promise.resolve(cleanData)
  } catch (error) {
    return Promise.reject(new RepackageError(error.stack))
  }
}
