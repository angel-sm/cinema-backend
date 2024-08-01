import { Injectable } from '@nestjs/common';
import { Booking } from '../../domain/booking.entity';
import { BookingRepository } from '../../domain/booking.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';

@Injectable()
export class PrismaRepository extends BookingRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async save(booking: Booking): Promise<void> {
    await this.prisma.booking.create({
      data: booking.toPrimitives(),
    });
  }

  async findByBookerId(bookerId: string): Promise<Array<any> | []> {
    const bookings = await this.prisma.booking.findMany({
      where: {
        bookerId: {
          equals: bookerId,
        },
      },
      include: {
        movie: {
          select: {
            name: true,
          },
        },
        auditorium: {
          select: {
            name: true,
          },
        },
        seat: {
          select: {
            seatNumber: true,
          },
        },
      },
    });
    return bookings;
  }

  async findByReservationParams(
    schedule: string,
    auditorium: string,
  ): Promise<Array<any> | []> {
    const bookings = await this.prisma.booking.findMany({
      where: {
        schedule: {
          equals: schedule,
        },
        auditoriumId: {
          equals: auditorium,
        },
      },
      include: {
        movie: {
          select: {
            name: true,
          },
        },
        auditorium: {
          select: {
            name: true,
          },
        },
        seat: {
          select: {
            seatNumber: true,
          },
        },
      },
    });
    return bookings;
  }
}
