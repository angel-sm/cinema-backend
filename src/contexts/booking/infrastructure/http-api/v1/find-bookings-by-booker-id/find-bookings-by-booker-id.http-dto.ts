import { IsString } from 'class-validator';

export class FindBookingsHttpDto {
  @IsString()
  bookerId: string;
}
