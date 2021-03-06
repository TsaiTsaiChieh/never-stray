import {Pet} from '../entity/pet.entity'
import {Tracking} from '../entity/tracking.entity'
import {PetRepository} from '../repository/pet.repository'
import {TrackingRepository} from '../repository/tracking.repository'
import {NotFound, RepackageError} from '../utils/app-error'
import {deepCopy} from '../utils/helper'

/** @class PetModel */
export class PetModel {
  private repository: PetRepository
  private trackingRepository: TrackingRepository

  /** @constructor */
  constructor() {
    this.repository = new PetRepository()
    this.trackingRepository = new TrackingRepository()
  }

  /**
   * Search pet by query
   *
   * @param  {PetSearchQueryType} query
   * @param  {number} [userId]
   * @return {Promise<PetSearchReturningType>}
   */
  async searchPetWithTrackingAndCount(
    query: PetSearchQueryType,
    userId?: number,
  ): Promise<PetSearchReturningType> {
    try {
      let trackingPetId: number[] = []
      const petResult: [Pet[], number] =
        await this.repository.findByFiltersAndCount(query, userId)
      if (userId) {
        const trackingResult: Tracking[] = await this.trackingRepository.find({
          user_id: userId,
        })
        trackingPetId = trackingResult ?
          trackingResult.map((ele) => ele.pet_id) : []
      }
      const cleanData: PetSearchReturningType = await repackagePetData(
        petResult,
        query,
        trackingPetId,
      )
      return Promise.resolve(cleanData)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  /**
   * Get pet by ID
   *
   * @param  {number} petId
   * @param  {number} [userId]
   * @return {Promise<PetInfoType>}
   */
  async getById(
    petId: number,
    userId?: number,
  ): Promise<PetInfoType> {
    try {
      let trackingResult: undefined | Tracking = undefined
      const petResult: Pet | undefined = await this.repository.findOneById(
        petId,
      )
      if (!petResult) {
        return Promise.reject(new NotFound(`Pet id ${petId} not found`))
      }
      if (userId) {
        trackingResult = await this.trackingRepository.findOne({
          pet_id: petId,
          user_id: userId,
        })
      }

      const cleanData: PetInfoType = deepCopy(petResult)
      cleanData.city_name = cleanData.city!.name
      cleanData.shelter_name = cleanData.shelter!.name
      cleanData.tracking = trackingResult ? true : false
      delete cleanData.city
      delete cleanData.shelter

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
 * @param  {PetSearchQueryType} query
 * @param  {number[]} trackingPetId Pet id from user tracking
 * @return {Promise<[PetSearchReturningType[], number]>}
 */
function repackagePetData(
  result: [Pet[], number],
  query: PetSearchQueryType,
  trackingPetId: number[],
): Promise<PetSearchReturningType> {
  try {
    const copyResult = deepCopy(result)
    const cleanData: PetSearchReturningType = {
      page: {
        current: query.page,
        size: query.limit,
        count: copyResult[1],
        total: Math.ceil(copyResult[1] / query.limit!),
      },
    } as PetSearchReturningType

    const petData: PetInfoType[] = copyResult[0]
    petData.map((ele) => {
      ele.region = ele.city!.region
      ele.city_name = ele.city!.name
      ele.shelter_name = ele.shelter!.name
      ele.tracking = trackingPetId.includes(ele.id)
      delete ele.city
      delete ele.shelter
    })
    cleanData.pets = petData
    return Promise.resolve(cleanData)
  } catch (error) {
    return Promise.reject(new RepackageError(error.stack))
  }
}
