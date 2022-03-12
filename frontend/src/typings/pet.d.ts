type PageType = {
  current: number
  size: number
  total: number
  count: number
}

type PetDataType = {
  id: number
  sub_id: number
  accept_number: string
  ref: string
  region: string
  city_id: number
  city_name: string
  shelter_id: number
  shelter_name: string
  kind: string
  sex: string
  color: string
  age: string
  ligation: string
  rabies: string
  title: string
  status: string
  remark: string
  phone: string
  image: string[]
  created_at: date
  update_at: date
}

interface PetsAPIType {
  page: PageType
  pet: PetDataType[]
}
