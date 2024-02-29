import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Description: String

    @Column({default: false})
    State: boolean

    @CreateDateColumn()
    createdAt: Date;
}