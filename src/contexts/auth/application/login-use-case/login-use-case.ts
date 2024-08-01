import { HttpException, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { LoginDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginUseCase {
  constructor(
    private eventEmitter: EventEmitter2,
    private jwtService: JwtService,
  ) {}

  async run(dto: LoginDto): Promise<any> {
    const [booker] = await this.eventEmitter.emitAsync('user.find', {
      email: dto.email,
    });

    if (!booker) {
      throw new HttpException('1Invalid credentials', 401);
    }

    if (!booker.validatePassword(dto.password)) {
      throw new HttpException('2Invalid credentials', 401);
    }

    const token = this.jwtService.sign(booker.toPrimitives());

    return { token, ...booker.toPrimitives() };
  }
}
