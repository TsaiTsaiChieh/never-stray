import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
/** @class Shelter */
export class Shelter {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({type: 'varchar', length: 32, nullable: false})
  name: string
}
