import { Auditorium } from './auditorium.entity';

export abstract class AuditoriumRepository {
  abstract getAuditoriums(): Promise<Array<Auditorium>>;
}
