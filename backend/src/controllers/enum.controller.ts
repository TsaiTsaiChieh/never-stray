/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import {Controller, Get, Req, Res} from 'routing-controllers'
import safeAwait from 'safe-await'

import {Area} from '../entity/area.entity'
import {Shelter} from '../entity/shelter.entity'
import {AreaModel} from '../models/area.model'
import {PetColorModel} from '../models/pet-color.model'
import {ShelterModel} from '../models/shelter.model'

@Controller('/enum')
export class EnumController {
  private areaModel: AreaModel
  private shelterModel: ShelterModel
  private petColorMode: PetColorModel

  constructor() {
    this.areaModel = new AreaModel()
    this.shelterModel = new ShelterModel()
    this.petColorMode = new PetColorModel()
  }

  @Get('/city')
  async getCities(@Req() req: Request, @Res() res: Response) {
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

  @Get('/color')
  async getPetColors(@Req() req: Request, @Res() res: Response) {
    const [error, result] = await safeAwait(this.petColorMode.getPetAllColors())
    if (error) return res.status(error.code).json(error)
    return res.json(result)
  }
}
