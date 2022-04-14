/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import httpStatus from 'http-status'
import {Controller, Get, Req, Res} from 'routing-controllers'
import safeAwait from 'safe-await'
import {PetModel} from '../models/pet.model'

import {petSearchSchema} from '../schemas/pet-search.schema'
import {ajv} from '../utils/ajv-util'

@Controller('/pets')
export class PetController {
  private model: PetModel

  constructor() {
    this.model = new PetModel()
  }
  @Get('/')
  async searchPet(@Req() req: Request, @Res() res: Response) {
    const city_id = req.query.city_id as string[]
    const shelter_id = req.query.shelter_id as string[]
    const query: PetSearchQueryType = {
      ...req.query,
      id: req.query.id ? Number(req.query.id) : undefined,
      city_id: req.query.city_id ? city_id.map((x) => parseInt(x)) : undefined,
      shelter_id: req.query.shelter_id ?
        shelter_id.map((x) => parseInt(x)) :
        undefined,
      limit: req.query.limit ? Number(req.query.limit) : undefined,
      page: req.query.page ? Number(req.query.page) : undefined,
      ascend: req.query.ascend ?
        req.query.ascend.toLocaleString() === 'true' :
        undefined,
    }
    const valid: boolean = ajv.validate(petSearchSchema, query)
    if (!valid) return res.status(httpStatus.BAD_REQUEST).json(ajv.errors)

    const [error, result]: [ErrorType, PetSearchReturningType] =
      await safeAwait(this.model.searchPetAndCount(query))
    if (error) return res.status(error.code).json(error)
    return res.json(result)
  }
}
