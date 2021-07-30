import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("tests")
export default class Tests {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    testLink: string;

    @Column()
    subjectId: number;

    @Column()
    teacherId: number;

    @Column()
    categoryId: number;

    @Column()
    semesterId: number
}