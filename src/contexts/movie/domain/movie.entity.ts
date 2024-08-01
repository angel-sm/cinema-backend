import { v4 as uuidv4 } from 'uuid';

export interface PrimitiveMovie {
  id: string;
  name: string;
  cover: string;
  comingSoon: boolean;
}

export class Movie {
  constructor(private attributes: PrimitiveMovie) {}

  static create(createMovie: {
    name: string;
    cover: string;
    comingSoon: boolean;
  }): Movie {
    return new Movie({
      id: uuidv4(),
      name: createMovie.name,
      cover: createMovie.cover,
      comingSoon: createMovie.comingSoon,
    });
  }

  toPrimitives(): PrimitiveMovie {
    return {
      id: this.attributes.id,
      name: this.attributes.name,
      cover: this.attributes.cover,
      comingSoon: this.attributes.comingSoon,
    };
  }
}
