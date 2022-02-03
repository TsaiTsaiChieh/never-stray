/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import {Controller, Get, Req, Res} from 'routing-controllers'

@Controller('/ping')

export class PingController {
  @Get('/api')
  pingAPI(@Req() req: Request, @Res() res: Response) {
    return res.send('pong')
  }
}
