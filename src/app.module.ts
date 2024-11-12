import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Header } from './header/entities/header.entity';
import { HeaderService } from './header/header.service';
import { HeaderController } from './header/header.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'binarios',
      entities: [Header],
      synchronize: true,  
    }),
    TypeOrmModule.forFeature([Header]),
  ],
  providers: [HeaderService],
  controllers: [HeaderController],
})
export class AppModule {}
