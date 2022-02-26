/* eslint-disable require-jsdoc */
import httpStatus from 'http-status'

/** @class AppError */
export class AppError extends Error {
  public name: string
  public message: any
  public code: number
  public status: string

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

export class InvalidValueError extends AppError {
  constructor(message: any = '無效值') {
    super(message)
  }
}

export class RepackageError extends AppError {
  constructor(message: any = '打包資料失敗') {
    super(message)
  }
}
