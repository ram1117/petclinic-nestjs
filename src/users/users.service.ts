import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findUser() {
    return { id: 1, name: 'John Doe' };
  }

  createUser() {
    return { id: 2, name: 'Sarah Connor' };
  }

  updateUser(id: string) {
    return { id: id, name: 'Sarah Connor' };
  }
}
