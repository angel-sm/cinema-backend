import { Controller, Get } from '@nestjs/common';
import { AUDITORIUM_URL } from '../../route.contants';
import { GetAuditoriumsUseCase } from '../../../../application/get-auditoriums-use-case/get-auditoriums-use-case';
import { PrimitiveAuditorium } from 'src/contexts/auditorium/domain/auditorium.entity';

@Controller(AUDITORIUM_URL)
export class GetAuditoriumsController {
  constructor(private readonly getAuditoriumsUseCase: GetAuditoriumsUseCase) {}

  @Get()
  async run(): Promise<Array<PrimitiveAuditorium>> {
    return await this.getAuditoriumsUseCase.run();
  }
}
