import { IsString, IsBoolean, IsOptional, IsDate } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly state: boolean;

  @IsDate()
  readonly createdAt: Date;
}
