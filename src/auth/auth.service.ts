import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findUser(username);
    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (isMatch) return user;
    }
    return null;
  }

  async signupUser(data: CreateUserDto) {
    const saltRounds = 10;
    const hashedPwd = await bcrypt.hash(data.password, saltRounds);
    return this.userService.createUser({ ...data, password: hashedPwd });
  }
}
