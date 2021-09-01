import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import Exam from "./Exam";
import SubjectTeacher from "./SubjectTeacher";
import CourseTeacher from './CourseTeacher';

@Entity("teacher")
export default class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Exam, exams => exams.teacher, { onDelete: "CASCADE"})
    exams: Exam[]

    @OneToMany(() => SubjectTeacher, (subjectTeachers) => subjectTeachers.teacher)
    subjectTeachers: SubjectTeacher[];

    @OneToMany(() => CourseTeacher, (courseTeachers) => courseTeachers.teacher)
    courseTeachers: CourseTeacher[];
}