import { IsNotEmpty } from 'class-validator';
export class LoginHttpDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
