import { v4 as uuidv4 } from 'uuid';

export interface PrimitiveBooker {
  id: string;
  email: string;
  password: string;
}

export class Booker {
  constructor(private attributes: PrimitiveBooker) {}

  static create(createBooker: { email: string; password: string }): Booker {
    return new Booker({
      id: uuidv4(),
      email: createBooker.email,
      password: createBooker.password,
    });
  }

  toPrimitives(): PrimitiveBooker {
    return {
      id: this.attributes.id,
      email: this.attributes.email,
      password: null,
    };
  }

  validatePassword(password: string): boolean {
    return this.attributes.password === password;
  }
}
