import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async findUser(id: string) {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    console.log(user);
    return user;
  }

  createUser() {
    return { id: 2, name: 'Sarah Connor' };
  }

  updateUser(id: string) {
    return { id: id, name: 'Sarah Connor' };
  }
}
