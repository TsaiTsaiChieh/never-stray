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

/**
 *
 * Check folder contents on S3
 *
 * @param  {S3ListObjectsType} params
 * @return  {Promise<(string | undefined)[]>} Object array of files
 */
export async function checkFolderContents(
  params: S3ListObjectsType,
): Promise<(string | undefined)[]> {
  const res = await s3
    .listObjectsV2({...params, Bucket: S3_BUCKET_NAME!})
    .promise()

  const files = res.Contents ?
    res.Contents.map(
      (ele) =>
        `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${params.Prefix
        }/${encodeURIComponent(ele.Key!.replace(`${params.Prefix}/`, ''))}`,
    ) :
    []
  return files
}
