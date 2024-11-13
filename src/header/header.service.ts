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
    private headerRepository: Repository<Header>,  
  ) {}

  
  create(createHeaderDto: CreateHeaderDto){
    const newHeader = this.headerRepository.create(createHeaderDto);
    this.headerRepository.save(newHeader);
    return newHeader;
  }

  findAll() {
    return  this.headerRepository.find();
  }

 
  findOne(id: number){
    return  this.headerRepository.findOne({ where: { id } });
  }

    update(id: number, createHeaderDto: CreateHeaderDto){
      return this.headerRepository.update(id, createHeaderDto)
  }
}
