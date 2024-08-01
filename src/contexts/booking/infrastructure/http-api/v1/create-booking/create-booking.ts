import { Body, Controller, Post } from '@nestjs/common';
import { BOOKING_ROUTE } from '../../route.contants';
import { CreateBookingUseCase } from '../../../../application/create-booking-use-case/create-booking-use-case';
import { CreateBookingHttpDto } from './create-booking.http-dto';

@Controller(BOOKING_ROUTE)
export class CreateBookingController {
  constructor(private readonly createBookingUseCase: CreateBookingUseCase) {}

  @Post()
  async run(@Body() createBookingHttpDto: CreateBookingHttpDto): Promise<void> {
    await this.createBookingUseCase.run(createBookingHttpDto);
  }
}
