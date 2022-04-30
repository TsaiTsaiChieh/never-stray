export function petKindConverter(key: string): string {
  switch (key) {
    case 'cat':
      return '喵'
    case 'dog':
      return '汪'
    default:
      return ''
  }
}

export function petSexConverter(key: PetSexType): string {
  const petSexName = {
    F: '妹妹',
    M: '弟弟',
    U: '未知',
  }
  return petSexName[key]
}

export const petAgeConverter = (key: PetAgeType): string => {
  const petAgeName = {
    A: '成年',
    C: '幼年',
    U: '未知',
  }
  return petAgeName[key]
}

export const ligationConverter = (key: TernaryType): string => {
  const ligationName = {
    T: '已結紮',
    F: '未結紮',
    U: '未知',
  }
  return ligationName[key]
}

export const petStatusConverter = (key: PetStatusType): string => {
  const statusName = {
    unknown: '未知',
    open: '待認養',
    adopted: '已認養',
    other: '其他',
    dead: '死亡',
  }
  return statusName[key]
}
