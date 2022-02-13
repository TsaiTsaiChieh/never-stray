import 'reflect-metadata'

import cors from 'cors'
import express, {Application} from 'express'

import {Router} from './router'
import {createConnection} from 'typeorm'
import {Area} from './entity/area.entity'
import {Pet} from './entity/pet.entity'
import {Shelter} from './entity/shelter.entity'

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
    this.cors()
    this.db()
    this.router()
  }
  /** Add CORS */
  private cors(): void {
    this.app.use(cors({
      origin: JSON.parse(process.env.ORIGINS),
      methods: ['GET', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    }))
  }
  /** Add DB */
  private async db(): Promise<void> {
    await createConnection({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Area, Pet, Shelter],
    })
  }
  /** Add router */
  private router(): void {
    Router.router(this.app)
  }
}
