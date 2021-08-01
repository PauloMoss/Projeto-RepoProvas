import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import Teacher from './Teacher';
import Semester from './Semester';
import Tests from './Tests';
import Category from "./Category";

@Entity("subjects")
export default class Subject {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ select: false })
    semesterId: number;
    
    @ManyToOne(() => Semester, semester => semester.subjects, {cascade: true}) 
    semester: Semester;

    @ManyToMany(() => Teacher, { cascade: true})
    @JoinTable({
        name: "subjects_teachers",
        joinColumns: [{ name: "subjectId" }],
        inverseJoinColumns: [{ name: "teacherId" }],
      })
    teachers: Teacher[];

    @OneToMany(() => Tests, tests => tests.subject, { onDelete: "CASCADE"})
    tests: Tests[]
}