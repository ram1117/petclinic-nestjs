import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pet } from 'src/pets/entities/pets.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @OneToMany(() => Pet, (pet) => pet.user)
  pets: Pet[];
}
