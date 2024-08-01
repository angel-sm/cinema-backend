import { Booking } from './booking.entity';

export abstract class BookingRepository {
  abstract save(booking: Booking): Promise<void>;
  abstract findByBookerId(bookerId: string): Promise<Array<Booking> | []>;
  abstract findByReservationParams(
    schedule: string,
    auditorium: string,
  ): Promise<Array<Booking> | []>;
}
