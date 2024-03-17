import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entitiy';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async findUser(username: string) {
    const user = await this.db.user.findFirstOrThrow({
      where: { username },
    });
    return new UserEntity(user);
  }

  async findbyId(id: string) {
    const date = new Date();
    const user = await this.db.user.findFirstOrThrow({
      where: { id },
      include: {
        pets: { include: { petType: true } },
        appoinments: {
          include: { slot: true, doctor: true },
          where: { slot: { slot: { gte: date } } },
        },
      },
    });
    return new UserEntity(user);
  }

  async createUser(body: CreateUserDto) {
    await this.db.user.create({ data: body });
    return { statusCode: 201, message: 'User created successfully' };
  }

  async updateUser(id: string, data: Partial<User>) {
    const user = await this.db.user.update({ where: { id }, data: data });
    return new UserEntity(user);
  }
}
