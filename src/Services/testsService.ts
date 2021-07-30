import { getRepository } from "typeorm";
import { PostNewTestBody } from '../Protocols/interface';

import Tests from "../Entities/Tests";
import Subjects from "../Entities/Subjects";
import Semester from "../Entities/Semester";
import Category from "../Entities/Category";

export async function saveNewTest(params:PostNewTestBody) {

    return await getRepository(Tests).insert(params)
}

export async function getSubjectsAndTeachers() {

    const subjects = await getRepository(Subjects).find({ relations:["teachers"]})
    const categories = await getRepository(Category).find()

    const result = { subjects, categories }

    return result
}

export async function getSemesterSubjects() {

    const result = await getRepository(Semester).find({ relations:["subjects"]})

    return result
}

export async function getSubjectTests(id:number) {

    const result = await getRepository(Category).find({ relations:["subjects"]})

    return result
}
