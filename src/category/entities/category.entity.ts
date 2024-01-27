import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn()
  c_id: number

  @Column()
  c_name: string

  @Column()
  c_image: string
}
