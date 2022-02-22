/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import {Controller, Get, Req, Res} from 'routing-controllers'
import {getConnectionManager} from 'typeorm'

@Controller('/ping')
export class PingController {
  @Get('/api')
  pingAPI(@Req() req: Request, @Res() res: Response) {
    return res.send('pong')
  }
  @Get('/db')
  async pingDB(@Req() req: Request, @Res() res: Response) {
    const con = getConnectionManager().get()
    try {
      let canConnect: boolean = false
      // Try to connect
      if (!con.isConnected) await con.connect()
      // Store connection result
      canConnect = con.isConnected
      if (!canConnect) return res.send('Database connection failed')
      else return res.send('Database connection successfully')
    } catch (error) {
      return res.send(`Database error happened: ${error}`)
    } finally {
      await con.close()
    }
  }
}
