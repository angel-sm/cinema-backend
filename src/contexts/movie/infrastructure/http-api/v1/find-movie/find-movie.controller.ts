import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { MOVIE_ROUTE } from '../../route.contants';
import { FindMovieByIdUseCase } from '../../../../application/find-movie-by-id-use-case/find-movie-by-id-use-case';
import { PrimitiveMovie } from 'src/contexts/movie/domain/movie.entity';
import { JwtAuthGuard } from 'src/contexts/shared/infrastructure/jwt/jwt-auth.guard';
import { FindMovieHttpDto } from './find-movie.http-dto';

@Controller(MOVIE_ROUTE)
export class FindMovieController {
  constructor(private readonly findMoviByIdUseCase: FindMovieByIdUseCase) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async run(@Param() dto: FindMovieHttpDto): Promise<PrimitiveMovie> {
    return await this.findMoviByIdUseCase.run({
      id: dto.id,
    });
  }
}
