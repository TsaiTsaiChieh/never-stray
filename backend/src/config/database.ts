import dotenv from 'dotenv'
import {Connection, createConnection} from 'typeorm'

import {Area} from '../entity/area.entity'
import {Pet} from '../entity/pet.entity'
import {Shelter} from '../entity/shelter.entity'

export const connection = async (
  env: string = process.env.NODE_ENV,
): Promise<Connection> => {
  dotenv.config({path: `.env.${env}`})
  return createConnection({
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: 3306,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [Area, Pet, Shelter],
  })
}
