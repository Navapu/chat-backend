import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: (req: Request) => {
        let token: string | null = null;
        if (req && req.cookies) {
          const cookies = req.cookies as Record<string, string | undefined>;
          token = cookies['access_token'] ?? null;
        }
        return token;
      },
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'clavesegura',
    });
  }

  validate(payload: { id: string; email: string }) {
    return { userId: payload.id, email: payload.email };
  }
}
