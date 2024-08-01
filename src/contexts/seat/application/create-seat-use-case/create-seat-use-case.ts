import { Injectable } from '@nestjs/common';
import { SeatRepository } from '../../domain/seat.repository';
import { CreateSeatDto } from './create-seat.dto';
import { Seat } from '../../domain/seat.entity';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class CreateSeatUseCase {
  constructor(private readonly seatRepository: SeatRepository) {}

  @OnEvent('booking.created')
  async run(dto: CreateSeatDto) {
    const seat = Seat.create(dto);
    await this.seatRepository.save(seat);
    return seat.toPrimitives().id;
  }
}
