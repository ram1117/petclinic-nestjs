import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findUser(username);
    if (user && user.password === pass) return user;
    return null;
  }
}
