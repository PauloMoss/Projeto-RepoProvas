import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Course from "./Course";
import Term from "./Term";

@Entity("courseTerm")
export default class CourseTerm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  courseId: number;

  @Column({ select: false })
  termId: number;

  @ManyToOne(() => Course, (course) => course.courseTerms)
  course: Course;

  @ManyToOne(() => Term, (term) => term.courseTerms)
  term: Term;
}
