import { Module } from '@nestjs/common';
import { FindBookerByIdUseCase } from '../application/find-booker-by-email-use-case/find-booker-by-email-use-case';
import { InLocalRepository } from './repositories/in-local-repository';
import { BookerRepository } from '../domain/booker.repository';
import { PrismaRepository } from './repositories/prisma.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';

@Module({
  controllers: [],
  providers: [
    FindBookerByIdUseCase,
    InLocalRepository,
    PrismaRepository,
    PrismaService,
    {
      provide: BookerRepository,
      useExisting: PrismaRepository,
    },
  ],
  exports: [FindBookerByIdUseCase],
})
export class BookerModule {}
