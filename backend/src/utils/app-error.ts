import httpStatus from 'http-status'

/** @class AppError */
export class AppError extends Error {
  protected details?: string
  protected code: number
  protected isOperational: boolean
  protected status: string

  /**
   * @constructor
   *
   * @param  {string} message Custom message
   * @param  {string} [details] Custom details
   * @param  {boolean} [isOperational=true] Default is true,
   *         show error in detail
   * @param  {number} [code=500] Http status code
   */
  constructor(
    message: string,
    details?: string,
    isOperational: boolean=true,
    code: number = httpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super()
    this.message = message
    this.details = details
    this.code = code
    this.isOperational = isOperational
    this.status = `${code}`.startsWith('4') ? 'fail' : 'error'
    Error.captureStackTrace(this, this.constructor)
    console.error(message)
  }
}
