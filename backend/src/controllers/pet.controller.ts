/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import httpStatus from 'http-status'
import {Controller, Get, Req, Res} from 'routing-controllers'

import {petSearchSchema} from '../schemas/pet-search.schema'
import {ajv} from '../utils/ajv-util'

@Controller('/pet')
export class PetController {
  @Get('/')
  async searchPet(@Req() req: Request, @Res() res: Response) {
    const valid: boolean = ajv.validate(petSearchSchema, req.query)
    if (!valid) return res.status(httpStatus.BAD_REQUEST).json(ajv.errors)
  }
}
