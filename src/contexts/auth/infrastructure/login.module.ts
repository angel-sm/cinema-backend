import { Module } from '@nestjs/common';
import { LoginController } from './http-api/v1/login/login.controller';
import { LoginUseCase } from '../application/login-use-case/login-use-case';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET_KEY } from '../../shared/infrastructure/jwt/jwt-auth.constants';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '2d',
      },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginUseCase],
  exports: [LoginUseCase],
})
export class LoginModule {}
