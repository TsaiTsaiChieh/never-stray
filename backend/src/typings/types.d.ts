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

type S3ListObjectsType = {
  /* Sets the maximum number of keys returned in the response. */
  MaxKeys: number
  /*  Limits the response to keys that begin with the specified prefix. */
  Prefix: string
}
