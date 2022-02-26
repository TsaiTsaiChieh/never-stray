import {Area} from '../entity/area.entity'
import {AreaRepository} from '../repository/area.repository'
import {DBError} from '../utils/app-error'

/** @class AreaModel */
export class AreaModel {
  private repository: AreaRepository

  /** @constructor */
  constructor() {
    this.repository = new AreaRepository()
  }

  /**
   * Get all area data
   *
   * @return {Promise<Area[]>}
   */
  async getAll(): Promise<Area[]> {
    try {
      const result = await this.repository.find()
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(new DBError(error.stack))
    }
  }
}
