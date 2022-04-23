import {oAuth2Client} from '../config/google-oauth2'
import {InvalidToken} from './app-error'

export const verifyGoogleToken = async (token: string) => {
  try {
    const ticket = await oAuth2Client.verifyIdToken({idToken: token})
    const payload = ticket.getPayload()
    return Promise.resolve(payload)
  } catch (error) {
    return Promise.reject(new InvalidToken(error.stack))
  }
}
