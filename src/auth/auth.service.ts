import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signinUser(username: string, pass: string) {
    const user = await this.userService.findUser(username);
    if (!user) throw new NotFoundException('User not found');

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('wrong username or password');
    }
    const { password, ...result } = user;
    const payload = { sub: user.id };
    return { user: result, token: this.jwtService.sign(payload) };
  }

  async signupUser(data: CreateUserDto) {
    const saltRounds = 10;
    const hashedPwd = await bcrypt.hash(data.password, saltRounds);
    return this.userService.createUser({ ...data, password: hashedPwd });
  }
}
