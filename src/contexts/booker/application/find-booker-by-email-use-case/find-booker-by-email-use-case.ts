import { Injectable } from '@nestjs/common';
import { BookerRepository } from '../../domain/booker.repository';
import { Booker } from '../../domain/booker.entity';
import { OnEvent } from '@nestjs/event-emitter';
import { FindBookerByEmailDto } from './find-booker-by-email.dto';

@Injectable()
export class FindBookerByIdUseCase {
  constructor(private readonly bookerRepository: BookerRepository) {}

  @OnEvent('user.find')
  async run(dto: FindBookerByEmailDto): Promise<Booker> {
    const booker = await this.bookerRepository.findByEmail(dto.email);
    return booker;
  }
}
