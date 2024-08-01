import { IsString } from 'class-validator';

export class FindBookingsByReservationParamsHttpDto {
  @IsString()
  schedule: string;

  @IsString()
  auditorium: string;
}
