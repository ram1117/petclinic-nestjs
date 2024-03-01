import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async findUser(email: string) {
    return this.db.user.findFirst({ where: { email } });
  }

  createUser() {
    return { id: 2, name: 'Sarah Connor' };
  }

  updateUser(id: string) {
    return { id: id, name: 'Sarah Connor' };
  }
}
