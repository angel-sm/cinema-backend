import { Module } from '@nestjs/common';
import { GetAuditoriumsController } from './http-api/v1/get-auditoriums/get-auditoriums.controller';
import { InLocalRepository } from './repositories/in-local-repository';
import { GetAuditoriumsUseCase } from '../application/get-auditoriums-use-case/get-auditoriums-use-case';
import { AuditoriumRepository } from '../domain/auditorium.repository';
import { PrismaRepository } from './repositories/prisma.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';

@Module({
  controllers: [GetAuditoriumsController],
  providers: [
    GetAuditoriumsUseCase,
    InLocalRepository,
    PrismaRepository,
    PrismaService,
    {
      provide: AuditoriumRepository,
      useExisting: PrismaRepository,
    },
  ],
  exports: [GetAuditoriumsUseCase],
})
export class AuditoriumModule {}
