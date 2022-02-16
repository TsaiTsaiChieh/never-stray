import {Shelter} from '../entity/shelter.entity'
import {BasicRepository} from '../utils/basic-repository'

/** @class ShelterRepository */
export class ShelterRepository extends BasicRepository<Shelter> {
  /** @constructor */
  constructor() {
    super(Shelter)
  }
}
