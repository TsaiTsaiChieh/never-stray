/* eslint-disable require-jsdoc */
import httpStatus from 'http-status'

/** @class AppError */
export class AppError extends Error {
  public name: string
  public message: string
  public code: number
  public status: string

  /**
   * @constructor
   *
   * @param  {any} message Custom message
   * @param  {number} [code=500] Http status code
   */
  constructor(
    message?: any,
    code: number = httpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super()
    this.name = this.constructor.name
    this.message = message
    this.code = code
    this.status = `${code}`.startsWith('4') ? 'fail' : 'error'
    Error.captureStackTrace(this, this.constructor)
    console.error(this)
  }
}

export class DBError extends AppError {
  constructor(
    message: any = 'MySQL 錯誤',
  ) {
    super(message)
  }
}

export class AxiosError extends AppError {
  constructor(message: any = 'Axios 錯誤') {
    super(message)
  }
}
