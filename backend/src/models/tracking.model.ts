import {PetRepository} from '../repository/pet.repository'
import {TrackingRepository} from '../repository/tracking.repository'
import {NotFound} from '../utils/app-error'

/** @class TrackingModel */
export class TrackingModel {
  private repository: TrackingRepository
  private petRepository: PetRepository

  /** @constructor */
  constructor() {
    this.repository = new TrackingRepository()
    this.petRepository = new PetRepository()
  }

  /**
   * Add tracking
   *
   * @param  {number} petId
   * @param  {number} userId
   * @return {Promise<void>}
   */
  async addTracking(petId: number, userId: number): Promise<void> {
    try {
      const petResult = await this.petRepository.findOne({id: petId})
      if (!petResult) return Promise.reject(new NotFound())
      await this.repository.upsertOne({pet_id: petId, user_id: userId})

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
