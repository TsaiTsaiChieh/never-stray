import {Pet} from '../entity/pet.entity'
import {BasicRepository} from '../utils/basic-repository'

/** @class PetRepository */
export class PetRepository extends BasicRepository<Pet> {
  /** @constant */
  constructor() {
    super(Pet)
  }
}
