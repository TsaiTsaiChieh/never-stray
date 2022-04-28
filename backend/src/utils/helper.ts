import jwtDecode from 'jwt-decode'

import {UserRepository} from '../repository/user.repository'
import {InvalidToken, UserNotFound} from './app-error'

/**
 * Deep copy
 *
 * @param  {any} data
 * @return  {any} data
 */
export function deepCopy(data: any): any {
  return JSON.parse(JSON.stringify(data))
}

/**
 *
 * Get user email and id from token decoder
 *
 * @param  {string} token
 * @return {Promise<Object>} email & user id
 */
export async function getUserFromToken(token: string): Promise<{
  email: string,
  userId: number
}> {
  try {
    const payload = jwtDecode<TokenType>(token.replace('Bearer ', ''))
    const {email} = payload
    // Get user ID
    const userRepository = new UserRepository()
    const result = await userRepository.findOne({email})
    if (!result) throw new UserNotFound()

    return {email, userId: result.id!}
  } catch (error) {
    throw new InvalidToken(error.stack)
  }
}
