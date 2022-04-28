import {Application} from 'express'
import {useExpressServer} from 'routing-controllers'

import {AuthController} from './controllers/auth.controller'
import {EnumController} from './controllers/enum.controller'
import {PetController} from './controllers/pet.controller'
import {PingController} from './controllers/ping.controller'
import {TrackingController} from './controllers/tracking.controller'

/** @class Router */
export class Router {
  /**
   * @static
   * @memberof Router
   * @param  {Application} app
   */
  static router(app: Application): void {
    useExpressServer(app, {
      routePrefix: 'api',
      controllers: [
        EnumController,
        PetController,
        PingController,
        AuthController,
        TrackingController,
      ],
    })
  }
}
