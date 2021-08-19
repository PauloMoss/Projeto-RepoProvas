import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Course from "./Course";
import Teacher from "./Teacher";

@Entity("courseTeacher")
export default class CourseTeacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  courseId: number;

  @Column({ select: false })
  teacherId: number;

  @ManyToOne(() => Course, (course) => course.courseTeachers)
  course: Course;

  @ManyToOne(() => Teacher, (teacher) => teacher.courseTeachers)
  teacher: Teacher;
}
