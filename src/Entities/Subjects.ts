import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import Teacher from './Teacher';
import Semester from './Semester';
import Tests from './Tests';

@Entity("subjects")
export default class Subject {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToOne(() => Semester, semester => semester.subjects) 
    semester: Semester;

    @ManyToMany(() => Teacher)
    @JoinTable({
        name: "subjects_teachers",
        joinColumns: [{ name: "subjectId" }],
        inverseJoinColumns: [{ name: "teacherId" }]
      })
    teachers: Teacher[];

    @OneToMany(() => Tests, tests => tests.subject)
    tests: Tests[]
}