import { Injectable } from '@nestjs/common';
import { Auditorium } from '../../domain/auditorium.entity';
import { AuditoriumRepository } from '../../domain/auditorium.repository';
import { PrismaService } from 'src/contexts/shared/infrastructure/repositories/prisma.repository';

@Injectable()
export class PrismaRepository extends AuditoriumRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async getAuditoriums() {
    const auditoriums = await this.prisma.auditorium.findMany();
    return auditoriums.map((auditorium) => new Auditorium(auditorium));
  }
}
