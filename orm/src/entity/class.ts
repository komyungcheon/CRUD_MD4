import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {Student} from "./student";


@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column()
    gvcn: string;

    @Column()
    quantity : number;

    @OneToMany(() => Student, (student) => student.class)
    students: Student[];
}
