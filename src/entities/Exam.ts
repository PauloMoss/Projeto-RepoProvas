import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import Subject from "./Subject";
import Category from "./Category";
import Teacher from "./Teacher";
import Semester from "./Semester";

@Entity("exam")
export default class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @Column({ select: false })
  subjectId: number;

  @Column({ select: false })
  teacherId: number;

  @Column({ select: false })
  semesterId: number;

  @Column()
  categoryId: number;

  @ManyToOne(() => Subject, (subject) => subject.exams, { cascade: true })
  subject: Subject;

  @ManyToOne(() => Teacher, (teacher) => teacher.exams, { cascade: true })
  teacher: Teacher;

  @ManyToOne(() => Semester, (semester) => semester.exams, { cascade: true })
  semester: Semester;

  @ManyToOne(() => Category, (category) => category.exams, { cascade: true })
  category: Category;
}
