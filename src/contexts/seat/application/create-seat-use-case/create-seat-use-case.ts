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
    const seatsId = [];

    for (const seatNumber of dto.seatNumber) {
      const seat = Seat.create({
        bookerId: dto.bookerId,
        seatNumber,
      });
      await this.seatRepository.save(seat);
      const id = seat.toPrimitives().id;
      seatsId.push(id);
    }

    return seatsId;
  }
}
