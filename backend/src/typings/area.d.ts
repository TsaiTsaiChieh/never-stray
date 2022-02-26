type AreaRegionType = 'E' | 'W' | 'S' | 'N' | 'M'

type AreaType = {
  id: number
  region: AreaRegionType
  name: string
}

type AreaDataType = IDNameType & {
  region: string
}
