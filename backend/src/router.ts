import {Application, NextFunction, Request, Response} from 'express'
import {useExpressServer} from 'routing-controllers'

import {EnumController} from './controllers/enum.controller'
import {PetController} from './controllers/pet.controller'
import {PingController} from './controllers/ping.controller'

/** @class Router */
export class Router {
  /**
   * @static
   * @memberof Router
   * @param  {Application} app
   */
  static router(app: Application): void {
    app.use((_: Request, res: Response, next: NextFunction) => {
      res.setHeader('Cache-Control', 'no-store')
      next()
    })
    useExpressServer(app, {
      routePrefix: 'api',
      controllers: [EnumController, PetController, PingController],
    })
  }
}
