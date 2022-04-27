/* eslint-disable require-jsdoc */
import {NextFunction, Request, Response} from 'express'
import {ExpressMiddlewareInterface, Req, Res} from 'routing-controllers'

import {UserRepository} from '../repository/user.repository'
import {UserNotFound} from './app-error'
import {jwtDecoder} from './helper'

export class LoginOrNot implements ExpressMiddlewareInterface {
  async use(
    @Req() req: Request,
    @Res() res: Response,
    next: (err?: any) => NextFunction,
  ): Promise<Response | undefined> {
    try {
      const token = req.headers.authorization
      let payload
      if (token) {
        payload = jwtDecoder(token)
        req.email = payload.email
        // Get user ID
        const userRepository = new UserRepository()
        const result = await userRepository.findOne({email: payload.email})
        if (result) req.userId = result.id
        else throw new UserNotFound()
      }
      next()
    } catch (error) {
      return res.status(error.code).json(error)
    }
  }
}
