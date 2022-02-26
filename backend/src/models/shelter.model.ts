import {Shelter} from '../entity/shelter.entity'
import {ShelterRepository} from '../repository/shelter.repository'
import {DBError} from '../utils/app-error'

/** @class ShelterModel */
export class ShelterModel {
  private repository: ShelterRepository

  /** @constructor */
  constructor() {
    this.repository = new ShelterRepository()
  }

  /**
   * Find all shelter data
   * @return {Promise<Shelter>}
   */
  async getAll(): Promise<Shelter[]> {
    try {
      const result: Shelter[] = await this.repository.find()
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(new DBError(error.stack))
    }
  }
}
