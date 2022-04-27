import {Tracking} from '../entity/tracking.entity'
import {BasicRepository} from '../utils/basic-repository'

/** @class TrackingRepository */
export class TrackingRepository extends BasicRepository<Tracking> {
  /** @constructor */
  constructor() {
    super(Tracking)
  }
}
