import { Injectable } from '@nestjs/common';
import { Movie } from '../../domain/movie.entity';
import { MovieRepository } from '../../domain/movie.repository';
import { PrismaService } from '../../../shared/infrastructure/repositories/prisma.repository';

@Injectable()
export class PrismaRepository extends MovieRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async findMovies() {
    const movies = await this.prisma.movie.findMany();
    return movies.map((movie) => new Movie(movie));
  }

  async findMovie(id: string): Promise<Movie> {
    const movie = await this.prisma.movie.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
    return new Movie(movie);
  }
}
