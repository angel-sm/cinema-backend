import { Injectable } from '@nestjs/common';
import {
  Auditorium,
  PrimitiveAuditorium,
} from '../../domain/auditorium.entity';
import { AuditoriumRepository } from '../../domain/auditorium.repository';

@Injectable()
export class InLocalRepository extends AuditoriumRepository {
  private auditoriums: Array<PrimitiveAuditorium> = [
    {
      id: '7183777d-891b-45e8-8522-7ff246dda9cc',
      name: 'Room A',
      schedules: ['3:00 PM', '5:00 PM', '7:00 PM'],
      seats: 20,
    },
    {
      id: '7183777d-891b-45e8-8522-7ff146dda9cc',
      name: 'Room B',
      schedules: ['3:00 PM', '5:00 PM', '7:00 PM'],
      seats: 20,
    },
    {
      id: '7183777d-891b-45e8-8522-8ff246dda9cc',
      name: 'Room C',
      schedules: ['3:00 PM', '5:00 PM', '7:00 PM'],
      seats: 30,
    },
  ];

  async getAuditoriums() {
    return this.auditoriums.map((auditorium) => new Auditorium(auditorium));
  }
}
