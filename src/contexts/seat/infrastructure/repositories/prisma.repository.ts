import { Injectable } from '@nestjs/common';
import { Seat } from '../../domain/seat.entity';
import { SeatRepository } from '../../domain/seat.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';

@Injectable()
export class PrismaRepository extends SeatRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async save(seat: Seat): Promise<void> {
    await this.prisma.seat.create({
      data: seat.toPrimitives(),
    });
  }
}
