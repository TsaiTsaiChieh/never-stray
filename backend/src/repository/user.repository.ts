import {User} from '../entity/user.entity'
import {DBError} from '../utils/app-error'
import {BasicRepository} from '../utils/basic-repository'

/** @class UserRepository */
export class UserRepository extends BasicRepository<User> {
  /** @constructor */
  constructor() {
    super(User)
  }

  /**
   * Upsert user data
   *
   * @param  {string} name The user's full name
   * @param  {string} email The user's email address
   * @param  {string} picture The URL of the user's profile picture
   * @return {Promise<void>}
   *
   */
  async upsert({name, email, picture}: UserType): Promise<void> {
    try {
      const result = await this.repository.findOne({email})

      result ?
        await this.repository.update({name, picture}, {email}) :
        await this.repository.save({name, email, picture})
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(new DBError(error.stack))
    }
  }
}
