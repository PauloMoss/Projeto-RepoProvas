import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import Subject from "./Subject";
import CourseTeacher from "./CourseTeacher";
import CourseTerm from "./CourseTerm";
import Term from "./Term";
import Teacher from "./Teacher";

@Entity("course")
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Subject, (subjects) => subjects.course)
  subjects: Subject[];

  @OneToMany(() => CourseTeacher, (courseTeachers) => courseTeachers.course)
  courseTeachers: CourseTeacher[];

  @OneToMany(() => CourseTerm, (courseTerms) => courseTerms.course)
  courseTerms: CourseTerm[];

  terms: Term[];

  teachers: Teacher[];
}
