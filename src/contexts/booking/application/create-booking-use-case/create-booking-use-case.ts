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
    const [seatId] = await this.eventEmitter.emitAsync(
      'booking.created',
      seatInformation,
    );
    dto.seatId = seatId as unknown as string;
    const reservation = Booking.create(dto);
    await this.bookingRepository.save(reservation);
  }
}
