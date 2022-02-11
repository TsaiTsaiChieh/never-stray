import {Column, PrimaryGeneratedColumn} from 'typeorm'

/** @class Shelter */
export class Shelter {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({type: 'varchar', length: 32, nullable: false})
    name: string
}
