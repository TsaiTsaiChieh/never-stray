/* eslint-disable require-jsdoc */
import axios from 'axios'
import {Request, Response} from 'express'
import {Controller, Get, Post, Req, Res} from 'routing-controllers'

import {UserModel} from '../models/user.model'
import {AxiosError} from '../utils/app-error'
import {verifyGoogleToken} from '../utils/validation'

@Controller('/auth')
export class AuthController {
  private userModel: UserModel

  constructor() {
    this.userModel = new UserModel()
  }

  @Post('/google-login')
  async googleLogin(@Req() req: Request, @Res() res: Response) {
    const {token} = req.body
    try {
      const payload = await verifyGoogleToken(token)
      const {email} = payload!
      const name = payload!.name ? payload!.name : undefined
      const picture = payload!.picture ? payload!.picture : undefined
      await this.userModel.upsertUser({
        name, email: email!, picture,
      })

      return res.json({name, email, picture, token})
    } catch (error) {
      return res.status(error.code).json(error)
    }
  }

  @Get('/google')
  async google(@Res() res: Response) {
    const {GOOGLE_REDIRECT_URL, GOOGLE_CLIENT_ID} = process.env
    const googleOauthUrl =
      'https://accounts.google.com/o/oauth2/v2/auth?' +
      'scope=email&profile&' +
      `redirect_uri=${GOOGLE_REDIRECT_URL}&` +
      'response_type=code&' +
      `client_id=${GOOGLE_CLIENT_ID}`
    return res.json({redirect_url: googleOauthUrl})
  }

  @Get('/google/callback')
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    const {GOOGLE_REDIRECT_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} =
      process.env
    const {code} = req.query
    try {
      const tokenRes = await axios({
        method: 'POST',
        url: 'https://www.googleapis.com/oauth2/v4/token',
        params: {
          code,
          client_id: GOOGLE_CLIENT_ID,
          client_secret: GOOGLE_CLIENT_SECRET,
          grant_type: 'authorization_code',
          redirect_uri: GOOGLE_REDIRECT_URL,
        },
      })
      const tokenOption: GoogleTokenOptionType = tokenRes.data
      return res.json(tokenOption)
    } catch (error) {
      const err = new AxiosError(error.stack)
      return res.status(err.code).json(err)
    }
  }
}
