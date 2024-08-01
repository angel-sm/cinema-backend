import { Injectable } from '@nestjs/common';
import { Movie, PrimitiveMovie } from '../../domain/movie.entity';
import { MovieRepository } from '../../domain/movie.repository';

@Injectable()
export class FindMoviesUseCase {
  constructor(private readonly moviesRepository: MovieRepository) {}

  async run(): Promise<Array<PrimitiveMovie>> {
    const movies = await this.moviesRepository.findMovies();
    return movies.map((movie: Movie) => movie.toPrimitives());
  }
}
