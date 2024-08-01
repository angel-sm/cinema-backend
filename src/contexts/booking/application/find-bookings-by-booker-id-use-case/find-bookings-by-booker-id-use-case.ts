import { Injectable } from '@nestjs/common';
import { BookingRepository } from '../../domain/booking.repository';
import { FindBookingByBookerIdDto } from './find-bookings-by-booker-id.dto';

@Injectable()
export class FindBookingsByBookerIdUseCase {
  constructor(private readonly bookingRepository: BookingRepository) {}

  async run(dto: FindBookingByBookerIdDto): Promise<Array<any>> {
    const bookings = await this.bookingRepository.findByBookerId(dto.bookerId);
    return bookings;
  }
}
