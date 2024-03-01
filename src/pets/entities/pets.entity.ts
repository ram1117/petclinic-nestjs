import { User } from 'src/users/user.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { PetType } from './petType.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.pets)
  user: User;

  @ManyToOne(() => PetType, (petType) => petType.pets)
  petType: PetType;
}
