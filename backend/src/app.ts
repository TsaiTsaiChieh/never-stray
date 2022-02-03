import 'reflect-metadata'

import express, {Application} from 'express'

import {Router} from './router'

/** @class App */
export class App {
  /**
   * Bootstrap the application
   *
   * @static
   * @memberof App
   * @return {App}
   */
  public static bootstrap(): App {
    return new App()
  }

  private app: Application

  /** @memberof App */
  constructor() {
    this.app = express()
    this.router()
  }
  /** Add router */
  private router(): void {
    Router.router(this.app)
  }
}
