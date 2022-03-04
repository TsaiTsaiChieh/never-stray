import axios, {AxiosResponse} from 'axios'
import httpStatus from 'http-status'
import {Dispatch, SetStateAction} from 'react'

const {REACT_APP_API_URL} = process.env

/**
 * Ping API and DB, the default loading value is true, if error happened,
 * remain the loading value, else set it to false
 *
 * @param  {Dispatch<SetStateAction<boolean>>} setLoading
 * @return {Promise<void>}
 */
export async function pingDB(
  setLoading: Dispatch<SetStateAction<boolean>>,
): Promise<void> {
  try {
    const res: AxiosResponse = await axios({
      method: 'GET',
      url: `${REACT_APP_API_URL}/ping/db`,
    })
    res.status === httpStatus.OK ? setLoading(false) : setLoading(true)
  } catch (error) {
    setLoading(true)
  }
}
