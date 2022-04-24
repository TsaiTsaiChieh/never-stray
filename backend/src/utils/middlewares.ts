/* eslint-disable require-jsdoc */
import {NextFunction, Request, Response} from 'express'
import jwtDecode from 'jwt-decode'
import {ExpressMiddlewareInterface, Req, Res} from 'routing-controllers'

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
        payload = jwtDecode<TokenType>(token.replace('Bearer ', ''))
        req.email = payload.email
      }
      next()
    } catch (error) {
      return res.status(error.code).json(error)
    }
  }
}
