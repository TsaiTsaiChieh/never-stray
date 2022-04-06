type TernaryType = 'T' | 'F' | 'U'

type IDNameType = {
  id: number
  name: string
}

type ErrorType = {
  name: string
  message: string
  code: number
  status: 'fail' | 'error'
}

type S3UpdateParamsType = {
  Key: string
  Body: string
  ContentType: string
}
