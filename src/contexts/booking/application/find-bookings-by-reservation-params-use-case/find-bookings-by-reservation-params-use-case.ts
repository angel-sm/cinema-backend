import { Injectable } from '@nestjs/common';
import { BookingRepository } from '../../domain/booking.repository';
import { FindBookingsByReservationParamsDto } from './find-bookings-by-reservation-params.dto';

@Injectable()
export class FindBookingsByReservationParamsUseCase {
  constructor(private readonly bookingRepository: BookingRepository) {}

  async run(dto: FindBookingsByReservationParamsDto): Promise<Array<any>> {
    const bookings = await this.bookingRepository.findByReservationParams(
      dto.schedule,
      dto.auditorium,
    );
    return bookings;
  }
}
