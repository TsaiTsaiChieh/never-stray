import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
/** @class User */
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({type: 'varchar', length: 128, nullable: true, unique: true})
  name?: string

  @Column({type: 'varchar', length: 128, nullable: false, unique: true})
  email: string

  @Column({type: 'varchar', length: 512, nullable: true})
  picture?: string

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date
}
