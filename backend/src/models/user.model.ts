import {UserRepository} from '../repository/user.repository'

/** @class UserModel */
export class UserModel {
  private repository: UserRepository

  /** @constructor */
  constructor() {
    this.repository = new UserRepository()
  }

  /**
   * Upsert user
   *
   * @param  {string} name The user's full name
   * @param  {string} email The user's email address
   * @param  {string} picture The URL of the user's profile picture
   * @return {Promise<void>}
   *
   */
  async upsertUser({name, email, picture}: UserType): Promise<void> {
    try {
      await this.repository.upsert({name, email, picture})
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
