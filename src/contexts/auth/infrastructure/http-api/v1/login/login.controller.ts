import { Body, Controller, Post } from '@nestjs/common';
import { AUTH_ROUTE } from '../../route.contants';
import { LoginUseCase } from 'src/contexts/auth/application/login-use-case/login-use-case';
import { LoginHttpDto } from './login.http-dto';

@Controller(AUTH_ROUTE)
export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post()
  async run(@Body() authPayload: LoginHttpDto): Promise<string> {
    return await this.loginUseCase.run(authPayload);
  }
}
