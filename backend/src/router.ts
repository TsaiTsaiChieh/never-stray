
import {useExpressServer} from 'routing-controllers'
import {Application} from 'express'
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
      controllers: [PingController],
    })
  }
}