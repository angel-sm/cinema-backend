import { Injectable } from '@nestjs/common';
import { BookingRepository } from '../../domain/booking.repository';
import { Booking } from '../../domain/booking.entity';
import { CreateBookingDto } from './create-booking.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateSeatDto } from '../../../seat/application/create-seat-use-case/create-seat.dto';

@Injectable()
export class CreateBookingUseCase {
  constructor(
    private readonly bookingRepository: BookingRepository,
    private eventEmitter: EventEmitter2,
  ) {}

  async run(dto: CreateBookingDto): Promise<void> {
    const seatInformation: CreateSeatDto = {
      bookerId: dto.bookerId,
      seatNumber: dto.seatNumber,
    };
    const [seatsIds] = await this.eventEmitter.emitAsync(
      'booking.created',
      seatInformation,
    );

    for (const seatId of seatsIds) {
      const reservation = Booking.create({
        auditoriumId: dto.auditoriumId,
        bookerId: dto.bookerId,
        movieId: dto.movieId,
        schedule: dto.schedule,
        seatId,
      });
      await this.bookingRepository.save(reservation);
    }
  }
}
