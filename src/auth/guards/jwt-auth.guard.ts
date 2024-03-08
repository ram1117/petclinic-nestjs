import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(user: any): TUser {
    if (!user) throw new UnauthorizedException('Please sign in');
    return user;
  }
}
