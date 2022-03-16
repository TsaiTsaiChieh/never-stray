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

export function petSexConverter(key: string): string {
  switch (key) {
    case 'F':
      return '妹妹'
    case 'M':
      return '弟弟'
    default:
      return '未知'
  }
}

export function petAgeConverter(key: string): string {
  switch (key) {
    case 'A':
      return '成年'
    case 'C':
      return '幼年'
    default:
      return '未知'
  }
}