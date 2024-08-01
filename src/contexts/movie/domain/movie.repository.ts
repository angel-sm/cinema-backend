import { Movie } from './movie.entity';

export abstract class MovieRepository {
  abstract findMovies(): Promise<Array<Movie>>;
  abstract findMovie(id: string): Promise<Movie>;
}
