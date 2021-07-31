import { getRepository } from "typeorm";
import { PostParams } from '../Protocols/interface';

import Tests from "../Entities/Tests";
import Subject from "../Entities/Subjects";
import Teacher from "../Entities/Teacher";
import Semester from "../Entities/Semester";
import Category from "../Entities/Category";
import Period from "../Entities/Period";

export async function saveNewTest(params:PostParams) {

    return await getRepository(Tests).insert(params)
}

export async function checkYears(period: string, year:string) {

    const existingYear = await getRepository(Period).find({where: { name : period }})

    if(existingYear.length === 0){
        return (await getRepository(Period).insert({name: period, year})).generatedMaps[0].id;
    }

    return existingYear[0].id
}

export async function getSubjectsAndTeachers() {

    const subjects = await getRepository(Subject).find({ relations:["teachers"]})
    const categories = await getRepository(Category).find()

    const result = { subjects, categories }

    return result
}

export async function getSemesterSubjects() {

    const result = await getRepository(Semester).find({ relations:["subjects"]})

    return result
}

export async function getSubjectTests(id:number) {

    const result = await getRepository(Subject).find({ relations:["tests","tests.category","tests.teacher","tests.period"], where:{ id }})

    return result
}

export async function getTeachersTests(id:number) {

    const result = await getRepository(Teacher).find({ relations:["tests","tests.subject","tests.category","tests.period"], where:{ id }})

    return result
}

export async function getTeachers() {

    const result = await getRepository(Teacher).find()

    return result
}