import AWS from 'aws-sdk'
import dotenv from 'dotenv'

const env: string = process.env.NODE_ENV!
dotenv.config({path: `.env.${env}`})

const {S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET_NAME} = process.env
AWS.config.update({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
})

const s3 = new AWS.S3()

/**
 * Put object to s3 bucket
 *
 * @param  {S3UpdateParamsType} params
 * @return {Promise<AWS.S3.ManagedUpload.SendData> }
 */
export async function putObject(
  params: S3UpdateParamsType,
): Promise<AWS.S3.ManagedUpload.SendData> {
  return await s3
    .upload({...params, Bucket: S3_BUCKET_NAME!})
    .promise()
}
