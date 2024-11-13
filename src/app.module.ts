import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Header } from './header/entities/header.entity';
import { HeaderModule } from './header/header.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

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
    HeaderModule
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
