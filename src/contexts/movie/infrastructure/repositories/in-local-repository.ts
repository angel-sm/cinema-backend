import { Injectable } from '@nestjs/common';
import { Movie, PrimitiveMovie } from '../../domain/movie.entity';
import { MovieRepository } from '../../domain/movie.repository';

@Injectable()
export class InLocalRepository extends MovieRepository {
  private movies: Array<PrimitiveMovie> = [
    {
      id: '7183777d-891b-45e8-8522-7ff241dda9cc',
      name: 'Garfield',
      cover: 'https://shorturl.at/9vs3x',
      comingSoon: true,
    },
    {
      id: '7183777d-891b-45e8-8522-7ff246dda4cc',
      name: 'Minions',
      cover: 'https://shorturl.at/RUBf5',
      comingSoon: true,
    },
    {
      id: '7183777d-891b-45e8-8522-7ff246dda9cc',
      name: 'Deadpool 3',
      cover:
        'https://res.cloudinary.com/saponestore/image/upload/v1722256436/rahal-nejraoui-deapdool-3-poster-4-by-rahalarts_gen8yw.jpg',
      comingSoon: false,
    },
    {
      id: '7183777d-891b-45e8-7522-7ff2c6dda9cc',
      name: 'Intensamente 2',
      cover: 'https://shorturl.at/zbcXN',
      comingSoon: true,
    },
    {
      id: '7183777d-891b-45e8-8522-7ff246ada9cc',
      name: 'Kung fu panda 4',
      cover: 'https://shorturl.at/orWGK',
      comingSoon: true,
    },
  ];

  async findMovies() {
    return this.movies.map((movie) => new Movie(movie));
  }

  async findMovie(id: string): Promise<Movie> {
    const movie = this.movies.find((movie) => movie.id === id);
    return new Movie(movie);
  }
}
