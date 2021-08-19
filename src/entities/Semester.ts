import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exam from './Exam';

@Entity("semester")
export default class Semester {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    year: Date;

    @OneToMany(() => Exam, exams => exams.semester, { onDelete: "CASCADE"})
    exams: Exam[]
}