import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Header } from './entities/header.entity';  
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';

@Injectable()
export class HeaderService {
  constructor(
    @InjectRepository(Header) 
    private headerRepository: Repository<Header>,  // Usamos Repository<Header> para acceder a los métodos de TypeORM
  ) {}

  // Crear un nuevo header
  async create(createHeaderDto: CreateHeaderDto): Promise<Header> {
    const header = this.headerRepository.create(createHeaderDto);
    return await this.headerRepository.save(header);
  }

  // Obtener todos los headers
  async findAll(): Promise<Header[]> {
    return await this.headerRepository.find();
  }

  // Obtener un header por ID
  async findOne(id: number): Promise<Header> {
    return await this.headerRepository.findOne({ where: { id } });
  }

  // Actualizar un header por ID
  async update(id: number, updateHeaderDto: UpdateHeaderDto): Promise<Header> {
    const header = await this.headerRepository.findOne({ where: { id } });
    if (!header) {
      throw new Error(`Header with ID ${id} not found`);
    }
    Object.assign(header, updateHeaderDto);
    return await this.headerRepository.save(header);
  }

  // Eliminar un header por ID
  async remove(id: number): Promise<void> {
    const header = await this.headerRepository.findOne({ where: { id } });
    if (!header) {
      throw new Error(`Header with ID ${id} not found`);
    }
    await this.headerRepository.remove(header);
  }
}
