import { Seat } from './seat.entity';

export abstract class SeatRepository {
  abstract save(seat: Seat): Promise<void>;
}
