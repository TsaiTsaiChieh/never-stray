
import {Application} from 'express'
import {useExpressServer} from 'routing-controllers'

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
      controllers: [`${__dirname}/controllers/*.ts`],
    })
  }
}
