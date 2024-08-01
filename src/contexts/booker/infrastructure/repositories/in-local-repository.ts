import { Injectable } from '@nestjs/common';
import { Booker, PrimitiveBooker } from '../../domain/booker.entity';
import { BookerRepository } from '../../domain/booker.repository';

@Injectable()
export class InLocalRepository extends BookerRepository {
  private bookers: Array<PrimitiveBooker> = [
    {
      email: 'angel.sanche@gmail.com',
      password: '123',
      id: 'f88b2425-c3b4-4e26-8513-5d059e2712bd',
    },
  ];

  async findByEmail(email: string): Promise<Booker> {
    const data = this.bookers.find((booker) => booker.email === email);
    const booker = Booker.create(data);
    return booker;
  }
}
