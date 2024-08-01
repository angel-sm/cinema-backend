import { v4 as uuidv4 } from 'uuid';

export interface PrimitiveAuditorium {
  id: string;
  name: string;
  seats: number;
  schedules: Array<string>;
}

export class Auditorium {
  constructor(private attributes: PrimitiveAuditorium) {}

  static create(createAuditorium: {
    name: string;
    seats: number;
    schedules: Array<string>;
  }): Auditorium {
    return new Auditorium({
      id: uuidv4(),
      name: createAuditorium.name,
      seats: createAuditorium.seats,
      schedules: createAuditorium.schedules,
    });
  }

  toPrimitives(): PrimitiveAuditorium {
    return {
      id: this.attributes.id,
      name: this.attributes.name,
      seats: this.attributes.seats,
      schedules: this.attributes.schedules,
    };
  }
}
