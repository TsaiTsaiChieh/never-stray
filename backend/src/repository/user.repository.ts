import {User} from '../entity/user.entity'

import {BasicRepository} from '../utils/basic-repository'

/** @class UserRepository */
export class UserRepository extends BasicRepository<User> {
  /** @constructor */
  constructor() {
    super(User)
  }
}
