import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

export enum ShelterID {
  KLU = 48, // 基隆市寵物銀行
  TPE = 49, // 臺北市動物之家
  TPH01 = 50, // 新北市板橋區公立動物之家
  TPH02 = 51, // 新北市新店區公立動物之家
  TPH03 = 53, // 新北市中和區公立動物之家
  TPH04 = 55, // 新北市淡水區公立動物之家
  TPH05 = 56, // 新北市瑞芳區公立動物之家
  TPH06 = 58, // 新北市五股區公立動物之家
  TPH07 = 59, // 新北市八里區公立動物之家
  TPH08 = 60, // 新北市三芝區公立動物之家
  TPH09 = 92, // 新北市政府動物保護防疫處
  TYC = 61, // 桃園市動物保護教育園區
  HSC = 62, // 新竹市動物收容所
  HSH = 63, // 新竹縣動物收容所
  TXG01 = 67, // 臺中市動物之家南屯園區
  TXG02 = 68, // 臺中市動物之家后里園區
  CWH = 69, // 彰化縣流浪狗中途之家
  NTO = 70, // 南投縣公立動物收容所
  CYI = 71, // 嘉義市流浪犬收容中心
  CHY = 72, // 嘉義縣流浪犬中途之家
  TNN01 = 73, // 臺南市動物之家灣裡站
  TNN02 = 74, // 臺南市動物之家善化站
  KHH01 = 75, // 高雄市壽山動物保護教育園區
  KHH02 = 76, // 高雄市燕巢動物保護關愛園區
  IUH = 77, // 屏東縣流浪動物收容所
  ILH = 78, // 宜蘭縣流浪動物中途之家
  HWA = 79, // 花蓮縣流浪犬中途之家
  TTT = 80, // 臺東縣動物收容中心
  LNN = 81, // 連江縣流浪犬收容中心
  KMN = 82, // 金門縣動物收容中心
  PEH = 83, // 澎湖縣流浪動物收容中心
  YLH = 89, // 雲林縣流浪動物收容所
  MAL = 96, // 苗栗縣生態保育教育中心
}

@Entity()
/** @class Shelter */
export class Shelter {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({type: 'varchar', length: 32, nullable: false})
  name: string
}
