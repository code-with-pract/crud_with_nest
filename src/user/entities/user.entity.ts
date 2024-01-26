import { Column, PrimaryColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  user_id: number

  @Column()
  UserName: string

  @Column()
  address: string

  @Column()
  email: string
}
