/* eslint-disable require-jsdoc */
import {NextFunction, Request, Response} from 'express'
import {ExpressMiddlewareInterface, Req, Res} from 'routing-controllers'


import {ShouldLogin} from './app-error'
import {getUserFromToken} from './helper'

export class LoginOrNot implements ExpressMiddlewareInterface {
  async use(
    @Req() req: Request,
    @Res() res: Response,
    next: (err?: any) => NextFunction,
  ): Promise<Response | undefined> {
    try {
      const token = req.headers.authorization
      if (token) {
        const {email, userId} = await getUserFromToken(token)
        req.email = email
        req.userId = userId
      }
      next()
    } catch (error) {
      return res.status(error.code).json(error)
    }
  }
}

export class MustLogin implements ExpressMiddlewareInterface {
  async use(
    @Req() req: Request,
    @Res() res: Response,
    next: (err?: any) => NextFunction,
  ) {
    try {
      const token = req.headers.authorization
      if (!token) throw new ShouldLogin()
      const {email, userId} = await getUserFromToken(token)
      req.email = email
      req.userId = userId
      next()
    } catch (error) {
      return res.status(error.code).json(error)
    }
  }
}
