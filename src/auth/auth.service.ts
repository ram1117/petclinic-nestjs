import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findUser(username);
    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (isMatch) {
        // eslint-disable-next-line  @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async signinUser(user: User) {
    const payload = { username: user.username, sub: user.id };
    return { user: user, token: this.jwtService.sign(payload) };
  }

  async signupUser(data: CreateUserDto) {
    const saltRounds = 10;
    const hashedPwd = await bcrypt.hash(data.password, saltRounds);
    return this.userService.createUser({ ...data, password: hashedPwd });
  }
}
