import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HeaderService } from './header.service';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';
import { Header } from './entities/header.entity';

@Controller('header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  // Crear un nuevo header
  @Post()
  async create(@Body() createHeaderDto: CreateHeaderDto): Promise<Header> {
    return this.headerService.create(createHeaderDto);
  }

  // Obtener todos los headers
  @Get()
  async findAll(): Promise<Header[]> {
    return this.headerService.findAll();
  }

  // Obtener un header por ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Header> {
    return this.headerService.findOne(id);
  }

  // Obtener el header con ID 1 (ruta personalizada)
  @Get('parte-jose-casa')
  async getParteJoseCasa(): Promise<Header> {
    return await this.headerService.findOne(1); // Suponiendo que el `id` es 1
  }

  // Actualizar un header por ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateHeaderDto: UpdateHeaderDto): Promise<Header> {
    return this.headerService.update(id, updateHeaderDto);
  }

  // Eliminar un header por ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.headerService.remove(id);
  }
}
