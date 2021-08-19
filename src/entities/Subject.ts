import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import Exam from "./Exam";
import SubjectTeacher from "./SubjectTeacher";
import Course from "./Course";
import Term from "./Term";

@Entity("subject")
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ select: false })
  termId: number;

  @OneToMany(() => Exam, (exams) => exams.subject, { onDelete: "CASCADE" })
  exams: Exam[];

  @OneToMany(() => SubjectTeacher, (subjectTeachers) => subjectTeachers.subject)
  subjectTeachers: SubjectTeacher[];

  @ManyToOne(() => Course, (course) => course.subjects)
  course: Course;

  @ManyToOne(() => Term, (term) => term.subjects)
  term: Term;
}
