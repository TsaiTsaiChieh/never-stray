import axios, {AxiosResponse} from 'axios'

const {REACT_APP_API_URL} = process.env

export async function searchPet(setPets: any) {
  try {
    const res: AxiosResponse = await axios({
      method: 'GET',
      url: `${REACT_APP_API_URL}/pets?limit=20&page=10`,
    })
    const data: PetsAPIType = await res.data
    setPets(data.pet)
  } catch (error) {
    setPets([])
  }
}
