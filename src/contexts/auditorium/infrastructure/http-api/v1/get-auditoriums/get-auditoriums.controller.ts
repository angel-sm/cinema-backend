import { Controller, Get, UseGuards } from '@nestjs/common';
import { AUDITORIUM_URL } from '../../route.contants';
import { GetAuditoriumsUseCase } from '../../../../application/get-auditoriums-use-case/get-auditoriums-use-case';
import { PrimitiveAuditorium } from 'src/contexts/auditorium/domain/auditorium.entity';
import { JwtAuthGuard } from 'src/contexts/shared/infrastructure/jwt/jwt-auth.guard';

@Controller(AUDITORIUM_URL)
export class GetAuditoriumsController {
  constructor(private readonly getAuditoriumsUseCase: GetAuditoriumsUseCase) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async run(): Promise<Array<PrimitiveAuditorium>> {
    return await this.getAuditoriumsUseCase.run();
  }
}
