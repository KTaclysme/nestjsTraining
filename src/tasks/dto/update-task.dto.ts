export class UpdateTaskDto {
  readonly id: number;
  readonly description: string;
  readonly state: boolean;
  readonly createdAt: Date;
}
