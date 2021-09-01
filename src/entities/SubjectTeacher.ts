import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./Subject";
import Teacher from "./Teacher";

@Entity("subjectTeacher")
export default class SubjectTeacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subjectId: number;

  @Column()
  teacherId: number;

  @ManyToOne(() => Subject, (subject) => subject.subjectTeachers)
  subject: Subject;

  @ManyToOne(() => Teacher, (teacher) => teacher.subjectTeachers)
  teacher: Teacher;
}
