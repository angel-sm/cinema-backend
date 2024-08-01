import { v4 as uuidv4 } from 'uuid';

export interface PrimitiveSeat {
  id: string;
  seatNumber: number;
  bookerId: string;
}

export class Seat {
  constructor(private attributes: PrimitiveSeat) {}

  static create(createSeat: { seatNumber: number; bookerId: string }): Seat {
    return new Seat({
      id: uuidv4(),
      seatNumber: createSeat.seatNumber,
      bookerId: createSeat.bookerId,
    });
  }

  toPrimitives(): PrimitiveSeat {
    return {
      id: this.attributes.id,
      seatNumber: this.attributes.seatNumber,
      bookerId: this.attributes.bookerId,
    };
  }
}
