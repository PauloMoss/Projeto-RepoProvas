import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import Subject from './Subjects';
import Category from "./Category";
import Teacher from "./Teacher";
import Period from "./Period";


@Entity("tests")
export default class Tests {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;

    @Column()
    subjectId: number;

    @Column()
    teacherId: number;

    @Column()
    periodId: number;

    @Column()
    categoryId: number;

    @ManyToOne(() => Subject, subject => subject.tests)
    subject: Subject;

    @ManyToOne(() => Teacher, teacher => teacher.tests)
    teacher: Teacher;

    @ManyToOne(() => Period, period => period.tests)
    period: Period;

    @ManyToOne(() => Category, category => category.tests)
    category: Category;
}