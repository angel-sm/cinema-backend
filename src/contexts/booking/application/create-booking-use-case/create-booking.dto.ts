export interface CreateBookingDto {
  auditoriumId: string;
  schedule: string;
  seatNumber?: number;
  seatId: string;
  bookerId: string;
  movieId: string;
}
