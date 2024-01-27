import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto)
  }

  @Get()
  findAll() {
    return this.categoryService.findAll()
  }

  @Get(':c_id')
  findOne(@Param('c_id') c_id: string) {
    return this.categoryService.findOne(+c_id)
  }

  @Patch(':c_id')
  update(
    @Param('c_id') c_id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+c_id, updateCategoryDto)
  }

  @Delete(':c_id')
  remove(@Param('c_id') c_id: string) {
    return this.categoryService.remove(+c_id)
  }
}
