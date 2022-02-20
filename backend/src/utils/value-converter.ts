import {CityID} from '../entity/area.entity'
import {Age, Kind, Sex, Status, Ternary} from '../entity/pet.entity'
import {ShelterID} from '../entity/shelter.entity'
import {InvalidValueError} from './app-error'

/**
 * City converter
 *
 * @param  {number} key
 * @return {City}
 */
export function cityConverter(key: number): CityID {
  switch (key) {
    case CityID.TPE:
      return CityID.TPE
    case CityID.TPH:
      return CityID.TPH
    case CityID.KLU:
      return CityID.KLU
    case CityID.ILN:
      return CityID.ILN
    case CityID.TYC:
      return CityID.TYC
    case CityID.HSH:
      return CityID.HSH
    case CityID.HSC:
      return CityID.HSC
    case CityID.MAL:
      return CityID.MAL
    case CityID.TXG:
      return CityID.TXG
    case CityID.CWH:
      return CityID.CWH
    case CityID.NTO:
      return CityID.NTO
    case CityID.YLH:
      return CityID.YLH
    case CityID.CHY:
      return CityID.CHY
    case CityID.CYI:
      return CityID.CYI
    case CityID.TNN:
      return CityID.TNN
    case CityID.KHH:
      return CityID.KHH
    case CityID.IUH:
      return CityID.IUH
    case CityID.HWA:
      return CityID.HWA
    case CityID.TTT:
      return CityID.TTT
    case CityID.PEH:
      return CityID.PEH
    case CityID.KMN:
      return CityID.KMN
    case CityID.LNN:
      return CityID.LNN
    default:
      throw new InvalidValueError(`Invalid value: ${key}`)
  }
}

/**
 * Shelter converter
 *
 * @param  {string} key
 * @return {ShelterID}
 */
export function shelterConverter(key: number): ShelterID {
  switch (key) {
    case ShelterID.KLU:
      return ShelterID.KLU
    case ShelterID.TPE:
      return ShelterID.TPE
    case ShelterID.TPH01:
      return ShelterID.TPH01
    case ShelterID.TPH02:
      return ShelterID.TPH02
    case ShelterID.TPH03:
      return ShelterID.TPH03
    case ShelterID.TPH04:
      return ShelterID.TPH04
    case ShelterID.TPH05:
      return ShelterID.TPH05
    case ShelterID.TPH06:
      return ShelterID.TPH06
    case ShelterID.TPH07:
      return ShelterID.TPH07
    case ShelterID.TPH08:
      return ShelterID.TPH08
    case ShelterID.TPH09:
      return ShelterID.TPH09
    case ShelterID.TYC:
      return ShelterID.TYC
    case ShelterID.KLU:
      return ShelterID.KLU
    case ShelterID.HSC:
      return ShelterID.HSC
    case ShelterID.HSH:
      return ShelterID.HSH
    case ShelterID.TXG01:
      return ShelterID.TXG01
    case ShelterID.TXG02:
      return ShelterID.TXG02
    case ShelterID.CWH:
      return ShelterID.CWH
    case ShelterID.NTO:
      return ShelterID.NTO
    case ShelterID.CYI:
      return ShelterID.CYI
    case ShelterID.CHY:
      return ShelterID.CHY
    case ShelterID.TNN01:
      return ShelterID.TNN01
    case ShelterID.TNN02:
      return ShelterID.TNN02
    case ShelterID.KHH01:
      return ShelterID.KHH01
    case ShelterID.KHH02:
      return ShelterID.KHH02
    case ShelterID.IUH:
      return ShelterID.IUH
    case ShelterID.HWA:
      return ShelterID.HWA
    case ShelterID.TTT:
      return ShelterID.TTT
    case ShelterID.LNN:
      return ShelterID.LNN
    case ShelterID.KMN:
      return ShelterID.KMN
    case ShelterID.PEH:
      return ShelterID.PEH
    case ShelterID.YLH:
      return ShelterID.YLH
    case ShelterID.MAL:
      return ShelterID.MAL
    default:
      throw new InvalidValueError(`Invalid value: ${key}`)
  }
}
/**
 * Pet kind Converter
 *
 * @param  {string} key
 * @return {Kind}
 */
export function petKindConverter(key: string): Kind {
  switch (key) {
    case '狗':
      return Kind.DOG
    case '貓':
      return Kind.CAT
    default:
      return Kind.OTHER
  }
}

/**
 * Pet sex Converter
 *
 * @param  {string} key
 * @return {Sex}
 */
export function petSexConverter(key: string): Sex {
  switch (key.toUpperCase()) {
    case Sex.MALE:
    case '公':
    case '男':
      return Sex.MALE
    case Sex.FEMALE:
    case '母':
    case '女':
    case '雌':
      return Sex.FEMALE
    default:
      return Sex.UNKNOWN
  }
}

/**
 * Pet color converter
 *
 * @param  {string} color color string
 * @return {string}
 */
export function petColorConverter(color: string): string {
  color = color.replace('色', '')
  if (color === '灰黑') return '黑灰'
  else if (color.includes('虎斑')) return '虎斑'
  else return color
}

/**
 * Pet age converter
 *
 * @param  {string} key
 * @return {Age}
 */
export function petAgeConverter(key: string): Age {
  switch (key.toLowerCase()) {
    case 'adult':
      return Age.ADULT
    case 'child':
      return Age.CHILD
    default:
      return Age.UNKNOWN
  }
}

/**
 * Ternary converter
 *
 * @param  {string} key
 * @return {Ternary}
 */
export function ternaryConverter(key: string): Ternary {
  switch (key.toUpperCase()) {
    case Ternary.FALSE:
      return Ternary.FALSE
    case Ternary.TRUE:
      return Ternary.TRUE
    default:
      return Ternary.UNKNOWN
  }
}

/**
 * Pet status converter
 *
 * @param  {string} key
 * @return {Status}
 */
export function petStatusConverter(key: string): Status {
  switch (key.toLowerCase()) {
    case Status.ADOPTED:
      return Status.ADOPTED
    case Status.OPEN:
      return Status.OPEN
    case Status.OTHER:
      return Status.OTHER
    case Status.DEAD:
      return Status.DEAD
    default:
      return Status.UNKNOWN
  }
}
