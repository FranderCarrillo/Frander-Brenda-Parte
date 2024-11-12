import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity('header')
  export class header {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image: string;
  }
