import { Injectable } from '@nestjs/common';
import { Seat, PrimitiveSeat } from '../../domain/seat.entity';
import { SeatRepository } from '../../domain/seat.repository';

@Injectable()
export class InLocalRepository extends SeatRepository {
  private seats: Array<PrimitiveSeat> = [];

  async save(seat: Seat): Promise<void> {
    this.seats.push(seat.toPrimitives());
  }
}
