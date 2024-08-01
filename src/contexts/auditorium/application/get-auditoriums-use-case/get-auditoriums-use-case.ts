import { Injectable } from '@nestjs/common';
import {
  Auditorium,
  PrimitiveAuditorium,
} from '../../domain/auditorium.entity';
import { AuditoriumRepository } from '../../domain/auditorium.repository';

@Injectable()
export class GetAuditoriumsUseCase {
  constructor(private readonly auditoriumRepository: AuditoriumRepository) {}

  async run(): Promise<Array<PrimitiveAuditorium>> {
    const auditoriums = await this.auditoriumRepository.getAuditoriums();
    return auditoriums.map((auditorium: Auditorium) =>
      auditorium.toPrimitives(),
    );
  }
}
