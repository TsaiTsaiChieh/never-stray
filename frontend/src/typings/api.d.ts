type PetsAPIType = {
  page: PageType
  pets: IPet[]
}

type IDAndNameType = {
  id: number
  name: string
}

type CityAPIType = IDAndNameType & {
  region: RegionType
}

type UserInfoType = {
  email: string
  name: string
  picture: string
}
