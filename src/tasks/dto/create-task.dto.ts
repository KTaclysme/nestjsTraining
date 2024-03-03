export class CreateTaskDto {
    readonly id: number
    readonly description: String
    readonly state: boolean
    readonly createdAt: Date;
}
