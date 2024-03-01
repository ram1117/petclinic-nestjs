import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pet } from './pets.entity';

@Entity()
export class PetType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @OneToMany(() => Pet, (pet) => pet.petType)
  pets: Pet[];
}
