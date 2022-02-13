import {Area} from '../entity/area.entity'
import {BasicRepository} from '../utils/basic-repository'

/** @class AreaRepository*/
export class AreaRepository extends BasicRepository<Area> {
  /** @constructor */
  constructor() {
    super(Area)
  }
}
