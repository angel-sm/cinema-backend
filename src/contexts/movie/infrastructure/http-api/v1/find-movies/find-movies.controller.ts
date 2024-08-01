import { Controller, Get } from '@nestjs/common';
import { MOVIE_ROUTE } from '../../route.contants';
import { FindMoviesUseCase } from '../../../../application/find-movies-use-case/find-movies-use-case';
import { PrimitiveMovie } from 'src/contexts/movie/domain/movie.entity';

@Controller(MOVIE_ROUTE)
export class FindMoviesController {
  constructor(private readonly getMoviesUseCase: FindMoviesUseCase) {}

  @Get()
  async run(): Promise<Array<PrimitiveMovie>> {
    return await this.getMoviesUseCase.run();
  }
}
