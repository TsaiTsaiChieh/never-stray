import {PetRepository} from '../repository/pet.repository'

/** @class PetColorModel */
export class PetColorModel {
  private repository: PetRepository

  /** @constructor */
  constructor() {
    this.repository = new PetRepository()
  }

  /**
   * Get all colors from pet entity
   *
   * @return {Promise<string[]> }
   */
  async getPetAllColors(): Promise<string[]> {
    try {
      const result: PetColor[] = await this.repository.getColors()
      return Promise.resolve(result.map((ele) => ele.pet_color))
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
