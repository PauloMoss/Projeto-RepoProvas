import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exam from './Exam';

@Entity("category")
export default class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Exam, exams => exams.category, { onDelete: "CASCADE"})
    exams: Exam[]
}