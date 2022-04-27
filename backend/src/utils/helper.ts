import jwtDecode from 'jwt-decode'
import {InvalidToken} from './app-error'

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
 * JWT decoder
 *
 * @param  {string} token
 * @return {TokenType}
 */
export function jwtDecoder(token: string): TokenType {
  try {
    return jwtDecode<TokenType>(token.replace('Bearer ', ''))
  } catch (error) {
    throw new InvalidToken(error.stack)
  }
}
