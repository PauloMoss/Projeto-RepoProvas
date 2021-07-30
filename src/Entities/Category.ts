import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Subject from "./Subjects";

@Entity("category")
export default class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}

/*@JoinColumn([
        { name: "subjectId", referencedColumnName: "id" }
    ])*/