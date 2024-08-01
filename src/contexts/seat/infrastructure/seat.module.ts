import { Module } from '@nestjs/common';
import { CreateSeatUseCase } from '../application/create-seat-use-case/create-seat-use-case';
import { SeatRepository } from '../domain/seat.repository';
import { InLocalRepository } from './repositories/in-local-repository';
import { PrismaRepository } from './repositories/prisma.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';

@Module({
  controllers: [],
  providers: [
    CreateSeatUseCase,
    InLocalRepository,
    PrismaRepository,
    PrismaService,
    {
      provide: SeatRepository,
      useExisting: PrismaRepository,
    },
  ],
  exports: [CreateSeatUseCase],
})
export class SeatModule {}
