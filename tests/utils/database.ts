import { getConnection, getRepository } from "typeorm";
import Tests from "../../src/Entities/Tests";
import Category from "../../src/Entities/Category";
import Period from "../../src/Entities/Period";
import Semester from "../../src/Entities/Semester";
import Subject from "../../src/Entities/Subjects";
import Teacher from "../../src/Entities/Teacher";
import * as Factory from './Factory';

export async function clearDatabase() {

    await getConnection().query("TRUNCATE semester RESTART IDENTITY CASCADE");
    await getConnection().query("TRUNCATE period RESTART IDENTITY CASCADE");
    await getConnection().query("TRUNCATE teachers RESTART IDENTITY CASCADE");
    await getConnection().query("TRUNCATE category RESTART IDENTITY CASCADE");
}

export async function insertFakeTest() {

    const params = Factory.createNewTest()

    const {link, subjectId, teacherId, categoryId} = params;
    const periodId = 1;
    const body = {link, subjectId, teacherId, categoryId, periodId}
    await getRepository(Tests).insert(body)
}

export async function populateDatabase() {

    const category = Factory.createNewCategory();
    const period = Factory.createNewPeriod();
    const semester = Factory.createNewSemester()
    const teacher = Factory.createNewTeacher()
    const subject = Factory.createNewSubject()

    await getRepository(Category).insert({ name:category })
    await getRepository(Period).insert(period)
    await getRepository(Semester).insert({ name:semester })
    await getRepository(Subject).insert(subject)
    await getRepository(Teacher).insert({ name: teacher })
    await getConnection().query(`INSERT INTO subjects_teachers ("subjectId", "teacherId") VALUES (1,1)`);
}