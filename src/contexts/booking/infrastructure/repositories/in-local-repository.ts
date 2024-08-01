import { Injectable } from '@nestjs/common';
import { Booking, PrimitiveBooking } from '../../domain/booking.entity';
import { BookingRepository } from '../../domain/booking.repository';

@Injectable()
export class InLocalRepository extends BookingRepository {
  findByReservationParams(
    schedule: string,
    auditorium: string,
  ): Promise<Array<Booking> | []> {
    console.log(schedule, auditorium);
    throw new Error('Method not implemented.');
  }

  private bookings: Array<PrimitiveBooking> = [];

  async findByUserId(userId: string): Promise<Array<Booking> | []> {
    const bookings = this.bookings.filter((booking) => booking.id === userId);
    return bookings.map((booking) => Booking.create(booking));
  }

  async save(booking: Booking): Promise<void> {
    this.bookings.push(booking.toPrimitives());
  }

  async findByBookerId(bookerId: string): Promise<Array<Booking> | []> {
    const bookings = this.bookings.filter(
      (booking) => booking.bookerId === bookerId,
    );
    return bookings.map((data) => Booking.create(data));
  }
}
