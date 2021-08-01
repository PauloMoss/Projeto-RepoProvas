import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import Subject from "./Subjects";
import Tests from "./Tests";

@Entity("category")
export default class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Tests, tests => tests.category, { onDelete: "CASCADE"})
    tests: Tests[]
}