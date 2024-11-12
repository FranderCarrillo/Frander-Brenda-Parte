import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity('header')
  export class Header {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    tittle: string;

    @Column()
    description: string;

    @Column()
    image: string;
  }
