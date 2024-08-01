import { Controller, Get, Param } from '@nestjs/common';
import { BOOKING_ROUTE } from '../../route.contants';
import { FindBookingsByBookerIdUseCase } from '../../../../application/find-bookings-by-booker-id-use-case/find-bookings-by-booker-id-use-case';
import { PrimitiveBooking } from '../../../../domain/booking.entity';
import { FindBookingsHttpDto } from './find-bookings-by-booker-id.http-dto';

@Controller(BOOKING_ROUTE)
export class FindBookingsByUserIdController {
  constructor(
    private readonly findBookingsByBookerIdUseCase: FindBookingsByBookerIdUseCase,
  ) {}

  @Get(':bookerId')
  async run(
    @Param() dto: FindBookingsHttpDto,
  ): Promise<Array<PrimitiveBooking>> {
    return await this.findBookingsByBookerIdUseCase.run({
      bookerId: dto.bookerId,
    });
  }
}
