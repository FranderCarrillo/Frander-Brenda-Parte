import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HeaderService } from './header.service';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';
import { Header } from './entities/header.entity';

@Controller('header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  
  @Post()
  create(@Body() createHeaderDto: CreateHeaderDto){
    return this.headerService.create(createHeaderDto);
  }


  @Get()
   findAll(){
    return this.headerService.findAll();
  }

 
  @Get(':id')
   findOne(@Param('id') id: number){
    return this.headerService.findOne(id);
  }

  
  @Get('parte-jose-casa')
   getParteJoseCasa(){
    return this.headerService.findOne(1); 
  }

  // Actualizar un header por ID
  @Put(':id')
  update(@Param('id') id: number, @Body() createHeaderDto: CreateHeaderDto) {
    return this.headerService.update(id, createHeaderDto);
  }

}
