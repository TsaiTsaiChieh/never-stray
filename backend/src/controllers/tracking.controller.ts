/* eslint-disable require-jsdoc */
import {Request, Response} from 'express'
import httpStatus from 'http-status'
import {Controller, Post, Req, Res, UseBefore} from 'routing-controllers'
import safeAwait from 'safe-await'

import {TrackingModel} from '../models/tracking.model'
import {toggleTrackingSchema} from '../schemas/tracking.schema'
import {ajv} from '../utils/ajv-util'
import {MustLogin} from '../utils/middlewares'

@Controller('/tracking')
export class TrackingController {
  private model: TrackingModel

  constructor() {
    this.model = new TrackingModel
  }

  @UseBefore(MustLogin)
  @Post('/')
  async postTracking(@Req() req: Request, @Res() res: Response) {
    const valid: boolean = ajv.validate(toggleTrackingSchema, req.body)
    if (!valid) return res.status(httpStatus.BAD_REQUEST).json(ajv.errors)
    const [error, _]: [ErrorType, void] = await safeAwait(
      this.model.addTracking(req.body.pet_id, req.userId))

    if (error) return res.status(error.code).json(error)
    return res.status(httpStatus.CREATED).send('ok')
  }
}
