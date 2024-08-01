import { Injectable } from '@nestjs/common';
import { Booker } from '../../domain/booker.entity';
import { BookerRepository } from '../../domain/booker.repository';
import { PrismaService } from '../../../shared/infrastructure/repositories/prisma.repository';

@Injectable()
export class PrismaRepository extends BookerRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async findByEmail(email: string): Promise<Booker> {
    console.log('🚀 ~ PrismaRepository ~ findByEmail ~ email:', email);
    const booker = await this.prisma.booker.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });
    return Booker.create(booker);
  }
}
