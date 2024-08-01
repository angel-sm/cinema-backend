import { IsUUID } from 'class-validator';

export class FindMovieHttpDto {
  @IsUUID()
  id: string;
}
