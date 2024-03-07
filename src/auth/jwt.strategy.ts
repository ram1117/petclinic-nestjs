import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Inject } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(ConfigService) configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return { userId: payload.id, username: payload.username };
  }
}
