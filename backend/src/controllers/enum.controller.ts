/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import {Controller, Get, Req, Res} from 'routing-controllers'
import safeAwait from 'safe-await'
import {Area} from '../entity/area.entity'
import {Shelter} from '../entity/shelter.entity'
import {AreaModel} from '../models/area.model'
import {ShelterModel} from '../models/shelter.model'


@Controller('/enum')
export class EnumController {
  private areaModel: AreaModel
  private shelterModel: ShelterModel

  constructor() {
    this.areaModel = new AreaModel()
    this.shelterModel = new ShelterModel()
  }

  @Get('/city')
  async getCities(@Req() req: Request, @Res() res: Response) {
    console.log(process.env.TYPEORM_HOST)
    const [error, result]: [ErrorType, Area[]] = await safeAwait(
      this.areaModel.getAll(),
    )
    if (error) return res.status(error.code).json(error)
    return res.json(result)
  }

  @Get('/shelter')
  async getShelters(@Req() req: Request, @Res() res: Response) {
    const [error, result]: [ErrorType, Shelter[]] = await safeAwait(
      this.shelterModel.getAll(),
    )
    if (error) return res.status(error.code).json(error)
    return res.json(result)
  }
}
