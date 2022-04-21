/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import {Controller, Get, Req, Res} from 'routing-controllers'

@Controller('/auth')
export class AuthController {
  @Get('/google')
  async googleLogin(@Res() res: Response) {
    const {GOOGLE_REDIRECT_URL, GOOGLE_CLIENT_ID} = process.env
    const googleOauthUrl =
      'https://accounts.google.com/o/oauth2/v2/auth?' +
      'scope=email&profile&' +
      `redirect_uri=${GOOGLE_REDIRECT_URL}&` +
      'response_type=code&' +
      `client_id=${GOOGLE_CLIENT_ID}`
    return res.json({redirect_url: googleOauthUrl})
  }
}
