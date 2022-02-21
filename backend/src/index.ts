import dotenv from 'dotenv'
const App = require('./app').App

const env: string = process.env.NODE_ENV!

dotenv.config({path: `.env.${env}`})
const APP_PORT: number = parseInt(process.env.APP_PORT!);

(() => {
  const app = App.bootstrap().app
  app.listen(APP_PORT, (): void => {
    console.info(`[${env}] Never-Stray App listening on ${APP_PORT}`)
  })
})()
