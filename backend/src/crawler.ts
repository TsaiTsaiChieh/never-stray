import dotenv from 'dotenv'
import {scheduleJob} from 'node-schedule'

import {getMeetPetData} from './jobs/meet-pet-job'
import {getShelterData} from './jobs/shelter-job'

const App = require('./app').App
const env: string = process.env.NODE_ENV!
dotenv.config({path: `.env.${env}`})
const JOB_PORT: number = parseInt(process.env.JOB_PORT!);

(() => {
  const app = App.bootstrap().app
  app.listen(JOB_PORT, (): void => {
    console.info(`[${env}] Crawler listening on ${JOB_PORT}`)
    scheduleJob(
      'Get shelter data scheduler',
      '0 */1 * * *',
      async (): Promise<void> => {
        await getShelterData()
      },
    )
    scheduleJob(
      'Get meet pet website data scheduler',
      '30 18 */7 * *', // At 2:30 (UTC+8) on every 7th day-of-month
      async (): Promise<void> => {
        await getMeetPetData()
      },
    )
  })
})()
