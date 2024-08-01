import { Controller, Get, Query } from '@nestjs/common';
import { BOOKING_ROUTE } from '../../route.contants';
import { FindBookingsByReservationParamsUseCase } from '../../../../application/find-bookings-by-reservation-params-use-case/find-bookings-by-reservation-params-use-case';
import { FindBookingsByReservationParamsHttpDto } from './find-bookings-by-reservation-params.http-dto';

@Controller(BOOKING_ROUTE)
export class FindBookingsByReservationParamsController {
  constructor(
    private readonly findBookingsByReservationParamsUseCase: FindBookingsByReservationParamsUseCase,
  ) {}

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
