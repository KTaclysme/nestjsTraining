import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: String

    @Column({default: false})
    state: boolean

    @CreateDateColumn()
    createdAt: Date;
}