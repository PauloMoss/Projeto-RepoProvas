import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import Teacher from './Teacher';
import Semester from './Semester';

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
}


/*@OneToMany(() => Subjects_Teachers, st => st.subject)
    teacherConnection: Promise<Subjects_Teachers[]>*/