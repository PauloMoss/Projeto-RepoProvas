import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import Teacher from './Teacher';

@Entity("subjects")
export default class Subject {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToMany(() => Teacher)
    @JoinTable({
        name: "subjects_teachers_teachers",
        joinColumns: [{ name: "subjectId" }],
        inverseJoinColumns: [{ name: "teacherId" }]
      })
    teachers: Teacher[];
}


/*@OneToMany(() => Subjects_Teachers, st => st.subject)
    teacherConnection: Promise<Subjects_Teachers[]>*/