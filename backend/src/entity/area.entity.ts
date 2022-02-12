import {Column, Entity, Index, PrimaryColumn} from 'typeorm'

export enum Region {
  EAST = 'E',
  WEST = 'W',
  SOUTH = 'S',
  NORTH = 'N',
  MIDDLE = 'M',
}

@Entity()
@Index(['region'])
/** @class Area */
export class Area {
  @PrimaryColumn()
  id: number

  @Column({type: 'enum', enum: Region, nullable: false})
  region: Region

  @Column({length: 4})
  name: string
}
