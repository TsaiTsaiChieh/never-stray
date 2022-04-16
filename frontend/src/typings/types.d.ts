type TernaryType = 'T' | 'F' | 'U'

type RegionType = 'E' | 'W' | 'S' | 'N' | 'M'

type PageType = {
  current: number
  size: number
  total: number
  count: number
}

type OptionType = {
  value: string
  label: string
}

type GalleryItemType = {
  original: string
  thumbnail: string
}
