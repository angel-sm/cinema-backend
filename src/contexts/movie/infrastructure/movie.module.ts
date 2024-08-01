import { Module } from '@nestjs/common';
import { FindMoviesController } from './http-api/v1/find-movies/find-movies.controller';
import { FindMoviesUseCase } from '../application/find-movies-use-case/find-movies-use-case';
import { MovieRepository } from '../domain/movie.repository';
import { JwtStrategy } from '../../shared/infrastructure/jwt/jwt-auth.strategy';
import { FindMovieController } from './http-api/v1/find-movie/find-movie.controller';
import { FindMovieByIdUseCase } from '../application/find-movie-by-id-use-case/find-movie-by-id-use-case';
import { PrismaRepository } from './repositories/prisma.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';

@Module({
  controllers: [FindMoviesController, FindMovieController],
  providers: [
    FindMoviesUseCase,
    FindMovieByIdUseCase,
    PrismaRepository,
    PrismaService,
    JwtStrategy,
    {
      provide: MovieRepository,
      useExisting: PrismaRepository,
    },
  ],
  exports: [FindMoviesUseCase, FindMovieByIdUseCase],
})
export class MoviesModule {}
