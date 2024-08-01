import { v4 as uuidv4 } from 'uuid';

export interface PrimitiveBooking {
  id: string;
  movieId: string;
  auditoriumId: string;
  schedule: string;
  seatId: string;
  bookerId: string;
}

export class Booking {
  constructor(private attributes: PrimitiveBooking) {}

  static create(createBooking: {
    movieId: string;
    auditoriumId: string;
    schedule: string;
    seatId: string;
    bookerId: string;
  }): Booking {
    return new Booking({
      id: uuidv4(),
      movieId: createBooking.movieId,
      auditoriumId: createBooking.auditoriumId,
      schedule: createBooking.schedule,
      seatId: createBooking.seatId,
      bookerId: createBooking.bookerId,
    });
  }

  toPrimitives(): PrimitiveBooking {
    return {
      id: this.attributes.id,
      movieId: this.attributes.movieId,
      auditoriumId: this.attributes.auditoriumId,
      schedule: this.attributes.schedule,
      seatId: this.attributes.seatId,
      bookerId: this.attributes.bookerId,
    };
  }
}
