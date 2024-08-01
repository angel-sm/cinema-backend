import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../../domain/movie.repository';
import { FindMovieDto } from './find-movie-by-id-dto';
import { PrimitiveMovie } from '../../domain/movie.entity';

@Injectable()
export class FindMovieByIdUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async run(dto: FindMovieDto): Promise<PrimitiveMovie> {
    const movie = await this.movieRepository.findMovie(dto.id);
    return movie.toPrimitives();
  }
}
