import { Module } from '@nestjs/common';
import { HeaderService } from './header.service';
import { HeaderController } from './header.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Header } from './entities/header.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Header])],
  controllers: [HeaderController],
  providers: [HeaderService],
})
export class HeaderModule {}
