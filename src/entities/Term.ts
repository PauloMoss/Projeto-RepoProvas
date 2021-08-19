import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import Subject from "./Subject";
import CourseTerm from "./CourseTerm";

@Entity("term")
export default class Term {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ select: false })
  order: number;

  @OneToMany(() => Subject, (subjects) => subjects.term)
  subjects: Subject[];

  @OneToMany(() => CourseTerm, (courseTerms) => courseTerms.term)
  courseTerms: CourseTerm[];
}
