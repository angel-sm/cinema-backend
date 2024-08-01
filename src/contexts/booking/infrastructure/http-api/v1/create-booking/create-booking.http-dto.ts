import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBookingHttpDto {
  @IsNotEmpty()
  @IsUUID()
  auditoriumId: string;

  @IsNotEmpty()
  schedule: string;

  @IsNotEmpty()
  seatNumber: number[];

  @IsNotEmpty()
  @IsUUID()
  seatId: string;

  @IsNotEmpty()
  @IsUUID()
  bookerId: string;

  @IsNotEmpty()
  @IsUUID()
  movieId: string;
}
