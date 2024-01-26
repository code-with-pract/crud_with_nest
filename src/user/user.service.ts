import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const result = await this.userRepository.create(createUserDto)

    return await this.userRepository.save(result)
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(user_id: number) {
    return await this.userRepository.findOne({ where: { user_id } })
  }

  async update(user_id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { user_id } })

    const updateUser = Object.assign(user, updateUserDto)
    return await this.userRepository.save(updateUser)
  }

  async remove(user_id: number) {
    const user = await this.userRepository.findOne({ where: { user_id } })

    return await this.userRepository.remove(user)
  }
}
