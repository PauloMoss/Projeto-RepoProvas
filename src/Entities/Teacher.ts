import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable  } from "typeorm";
import Subject from './Subjects';

@Entity("teachers")
export default class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToMany(() => Subject, subjects => subjects.teachers) 
    subjects: Subject[];
}

/*@OneToMany(() => Subjects_Teachers, st => st.teacher)
    subjectConnection: Promise<Subjects_Teachers[]>*/