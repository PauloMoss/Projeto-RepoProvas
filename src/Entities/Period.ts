import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Tests from './Tests';

@Entity("period")
export default class Period {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    year: Date;
    
    @OneToMany(() => Tests, tests => tests.period, { onDelete: "CASCADE"})
    tests: Tests[]
}