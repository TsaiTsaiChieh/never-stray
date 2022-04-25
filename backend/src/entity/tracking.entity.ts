import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import {Pet} from './pet.entity'
import {User} from './user.entity'

@Entity()
@Index(['pet_id', 'user_id'], {unique: true})
/** @class Tracking */
export class Tracking {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({type: 'int', nullable: false})
  user_id: number
  @ManyToOne((_) => User)
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user?: number

  @Column({type: 'int', nullable: false})
  pet_id: number
  @ManyToOne((_) => Pet)
  @JoinColumn({name: 'pet_id', referencedColumnName: 'id'})
  pet?: number

  @CreateDateColumn()
  created_at?: Date
}
