
import {Application} from 'express'
import {useExpressServer} from 'routing-controllers'
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
    useExpressServer(app, {
      routePrefix: 'api',
      controllers: [PetController, PingController],
    })
  }
}
