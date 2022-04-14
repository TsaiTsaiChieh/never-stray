type PetRefType = 'gov' | 'map' | 'own'

type PetSexType = 'F' | 'M' | 'U'

type PetAgeType = 'A' | 'C' | 'U'

type PetKindType = 'dog' | 'cat' | 'other'

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

type PetStatusType = 'unknown' | 'open' | 'adopted' | 'other' | 'dead'

type PetType = {
  id: number
  sub_id: number
  accept_number: string
  name: string
  ref: PetRefType
  region: AreaRegionType
  city?: AreaType
  shelter?: IDNameType
  kind: PetKindType
  sex: PetSexType
  color: string
  age: PetAgeType
  ligation: TernaryType
  rabies: TernaryType
  title: string
  status: PetStatusType
  remark: string
  phone: string
  image: string[]
  created_at: Date
  updated_at: Date
}

type ShelterAPIDataType = {
  animal_id: number
  animal_subid: string
  animal_area_pkid: number
  animal_shelter_pkid: number
  animal_place: string
  animal_kind: string
  animal_sex: string
  animal_bodytype: string
  animal_colour: string
  animal_age: string
  animal_sterilization: string
  animal_bacterin: string
  animal_foundplace: string
  animal_title: string
  animal_status: string
  animal_remark: string
  animal_caption: string
  animal_opendate: string
  animal_closeddate: string
  animal_update: string
  animal_createtime: string
  shelter_name: string
  album_file: string
  album_update: string
  cDate: string
  shelter_address: string
  shelter_tel: string
}

type PetSearchQueryType = {
  id?: number
  status?: PetStatusType[]
  ref?: PetRefType[]
  city_id?: number[]
  shelter_id?: number[]
  kind?: PetKindType[]
  sex?: PetSexType[]
  color?: string[]
  age?: PetAgeType[]
  region?: AreaRegionType[]
  ligation?: TernaryType[]
  order_key?: PetOrderKeyType
  ascend?: boolean
  keyword?: string
  limit?: number
  page?: number
}

type PetInfoType = PetType & {
  region: AreaRegionType
  city_name: string
  shelter_name: string
}

type PetSearchReturningType = {
  page: {
    current: number
    size: number
    total: number
    count: number
  }
  pets: PetInfoType[]
}

type PetColor = {
  pet_color: string
}
