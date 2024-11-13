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
  title: string;

  @Column({ nullable: true }) // Permite que description sea opcional
  description: string;

  @Column({ nullable: true }) // Permite que image sea opcional
  image: string;
}
