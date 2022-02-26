/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import {Controller, Get, Req, Res} from 'routing-controllers'
import safeAwait from 'safe-await'
import {Area} from '../entity/area.entity'
import {AreaModel} from '../models/area.model'

@Controller('/enum')
export class EnumController {
  private model: AreaModel
  constructor() {
    this.model = new AreaModel()
  }
  @Get('/city')
  async getCities(@Req() req: Request, @Res() res: Response) {
    const [error, result]: [ErrorType, Area[]] = await safeAwait(
      this.model.getAll(),
    )
    if (error) return res.status(error.code).json(error)
    return res.json(result)
  }
}
