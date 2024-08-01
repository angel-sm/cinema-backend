import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { BOOKING_ROUTE } from '../../route.contants';
import { FindBookingsByReservationParamsUseCase } from '../../../../application/find-bookings-by-reservation-params-use-case/find-bookings-by-reservation-params-use-case';
import { FindBookingsByReservationParamsHttpDto } from './find-bookings-by-reservation-params.http-dto';
import { JwtAuthGuard } from 'src/contexts/shared/infrastructure/jwt/jwt-auth.guard';

@Controller(BOOKING_ROUTE)
export class FindBookingsByReservationParamsController {
  constructor(
    private readonly findBookingsByReservationParamsUseCase: FindBookingsByReservationParamsUseCase,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async run(
    @Query() dto: FindBookingsByReservationParamsHttpDto,
  ): Promise<any> {
    return await this.findBookingsByReservationParamsUseCase.run({
      auditorium: dto.auditorium,
      schedule: dto.schedule,
    });
  }
}
