import { Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from './entities/category.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.findOne({
      where: { c_name: createCategoryDto.c_name },
    })

    if (category) {
      throw new Error('Already Category exists')
    }
    const newCategory = await this.categoryRepository.create(createCategoryDto)

    return await this.categoryRepository.save(newCategory)
  }

  async findAll() {
    return await this.categoryRepository.find()
  }

  async findOne(c_id: number) {
    const category = await this.categoryRepository.findOne({ where: { c_id } })
    return category || {}
  }

  async update(c_id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOne({ where: { c_id } })

    const updateCategory = Object.assign(category, updateCategoryDto)
    return await this.categoryRepository.save(updateCategory)
  }

  async remove(c_id: number) {
    const category = await this.categoryRepository.findOne({ where: { c_id } })

    return await this.categoryRepository.remove(category)
  }
}
