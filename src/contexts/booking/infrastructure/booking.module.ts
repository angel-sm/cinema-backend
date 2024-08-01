import { Module } from '@nestjs/common';
import { InLocalRepository } from './repositories/in-local-repository';
import { FindBookingsByBookerIdUseCase } from '../application/find-bookings-by-booker-id-use-case/find-bookings-by-booker-id-use-case';
import { BookingRepository } from '../domain/booking.repository';
import { CreateBookingUseCase } from '../application/create-booking-use-case/create-booking-use-case';
import { CreateBookingController } from './http-api/v1/create-booking/create-booking';
import { FindBookingsByUserIdController } from './http-api/v1/find-bookings-by-booker-id/find-bookings-by-booker-id.controller';
import { PrismaRepository } from './repositories/prisma.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';
import { FindBookingsByReservationParamsController } from './http-api/v1/find-bookings-by-reservation-params/find-bookings-by-reservation-params.controller';
import { FindBookingsByReservationParamsUseCase } from '../application/find-bookings-by-reservation-params-use-case/find-bookings-by-reservation-params-use-case';

@Module({
  controllers: [
    CreateBookingController,
    FindBookingsByUserIdController,
    FindBookingsByReservationParamsController,
  ],
  providers: [
    FindBookingsByReservationParamsUseCase,
    FindBookingsByBookerIdUseCase,
    CreateBookingUseCase,
    InLocalRepository,
    PrismaRepository,
    PrismaService,
    {
      provide: BookingRepository,
      useExisting: PrismaRepository,
    },
  ],
  exports: [
    FindBookingsByBookerIdUseCase,
    CreateBookingUseCase,
    FindBookingsByReservationParamsUseCase,
  ],
})
export class BookingModule {}
