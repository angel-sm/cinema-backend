import { Booker } from './booker.entity';

export abstract class BookerRepository {
  abstract findByEmail(email: string): Promise<Booker>;
}
