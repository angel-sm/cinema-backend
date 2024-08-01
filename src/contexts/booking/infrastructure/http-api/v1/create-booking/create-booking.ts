import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { BOOKING_ROUTE } from '../../route.contants';
import { CreateBookingUseCase } from '../../../../application/create-booking-use-case/create-booking-use-case';
import { CreateBookingHttpDto } from './create-booking.http-dto';
import { JwtAuthGuard } from 'src/contexts/shared/infrastructure/jwt/jwt-auth.guard';

@Controller(BOOKING_ROUTE)
export class CreateBookingController {
  constructor(private readonly createBookingUseCase: CreateBookingUseCase) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async run(@Body() createBookingHttpDto: CreateBookingHttpDto): Promise<void> {
    await this.createBookingUseCase.run(createBookingHttpDto);
  }
}
