import { Module } from '@nestjs/common';
import { MoviesModule } from './contexts/movie/infrastructure/movie.module';
import { AuditoriumModule } from './contexts/auditorium/infrastructure/auditorium.module';
import { SeatModule } from './contexts/seat/infrastructure/seat.module';
import { BookingModule } from './contexts/booking/infrastructure/booking.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { LoginModule } from './contexts/auth/infrastructure/login.module';
import { BookerModule } from './contexts/booker/infrastructure/booker.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    EventEmitterModule.forRoot(),
    MoviesModule,
    AuditoriumModule,
    SeatModule,
    BookingModule,
    LoginModule,
    BookerModule,
  ],
})
export class AppModule {}
