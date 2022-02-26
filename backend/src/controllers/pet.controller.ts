/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import httpStatus from 'http-status'
import {Controller, Get, Req, Res} from 'routing-controllers'
import safeAwait from 'safe-await'
import {PetModel} from '../models/pet.model'

import {petSearchSchema} from '../schemas/pet-search.schema'
import {ajv} from '../utils/ajv-util'

@Controller('/pet')
export class PetController {
  private model: PetModel

  constructor() {
    this.model = new PetModel()
  }
  @Get('/')
  async searchPet(@Req() req: Request, @Res() res: Response) {
    const query: PetSearchQueryType = {
      ...req.query,
      city_id: req.query.city_id ? Number(req.query.city_id) : undefined,
      shelter_id: req.query.shelter_id ?
        Number(req.query.shelter_id) :
        undefined,
      limit: req.query.limit ? Number(req.query.limit) : undefined,
      page: req.query.page ? Number(req.query.page) : undefined,
      ascend: req.query.ascend ? Boolean(Number(req.query.limit)) : undefined,
    }
    const valid: boolean = ajv.validate(petSearchSchema, query)
    if (!valid) return res.status(httpStatus.BAD_REQUEST).json(ajv.errors)

    const [error, result]: [ErrorType, [PetSearchReturningType[], number]] =
      await safeAwait(this.model.searchPetAndCount(query))
    if (error) return res.status(error.code).json(error)
    return res.json(result)
  }
}
