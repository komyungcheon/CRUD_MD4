import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import {Class} from "./class";


@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column()
    age: number;

    @Column()
    point: number;

    @ManyToOne(() => Class, (classEntity) => classEntity.students)
    class: Class;
}

