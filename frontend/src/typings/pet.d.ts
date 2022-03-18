type PetRefType = 'gov' | 'map' | 'own'

type PetSexType = 'F' | 'M' | 'U'

type PetAgeType = 'A' | 'C' | 'U'

type PetKindType = 'all' | 'cat' | 'dog'

type PetStatusType = 'unknown' | 'open' | 'adopted' | 'other' | 'dead'

type AreaRegionType = 'E' | 'W' | 'S' | 'N' | 'M'

type PetOrderKeyType =
  | 'id'
  | 'ref'
  | 'city_id'
  | 'shelter_id'
  | 'kind'
  | 'sex'
  | 'color'
  | 'age'
  | 'created_at'
  | 'updated_at'

type PetDataType = {
  id: number
  sub_id: number
  accept_number: string
  ref: PetRefType
  region: AreaRegionType
  city_id: number
  city_name: string
  shelter_id: number
  shelter_name: string
  kind: string
  sex: PetSexType
  color: string
  age: PetAgeType
  ligation: string
  rabies: string
  title: string
  status: PetStatusType
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

type SearchPetFilters = {
  status?: PetStatusType
  ref?: PetRefType
  city_id?: number
  shelter_id?: number
  kind?: PetKindType
  sex?: PetSexType
  color?: string
  age?: PetAgeType
  region?: AreaRegionType
  order_key?: PetOrderKeyType
  ascend?: boolean
  limit: number
  page: number
}
