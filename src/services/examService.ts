import { getRepository } from "typeorm";
import { InsertParams, SemesterBody } from "../protocols/interface";

import Tests from "../entities/Exam";
import Teacher from "../entities/Teacher";
import Term from "../entities/Term";
import Category from "../entities/Category";
import Semester from "../entities/Semester";

export async function getAllCategories() {
  const result = await getRepository(Category).find();

  return result;
}

export async function saveNewTest(params: InsertParams) {
  return await getRepository(Tests).insert(params);
}

export async function checkYears(semester: SemesterBody) {
  const { year, name } = semester;
  const existingYear = await getRepository(Semester).find({
    where: [{ name }, { year }],
  });

  if (existingYear.length === 0) {
    return (await getRepository(Semester).insert({ name, year })).generatedMaps[0].id;
  }

  return existingYear[0].id;
}

export async function getTeachersExams(courseId: number) {
  const result = getRepository(Teacher)
    .createQueryBuilder("teacher")
    .leftJoin("teacher.courseTeachers", "courseTeachers")
    .leftJoinAndSelect("teacher.exams", "exams")
    .leftJoinAndSelect("exams.semester", "semester")
    .leftJoinAndSelect("exams.subject", "subject")
    .where("courseTeachers.courseId = :courseId", { courseId })
    .getMany();

  return result;
}

export async function getSubjectsExamsOrderByTerm(courseId: number) {
  const result = getRepository(Term)
    .createQueryBuilder("term")
    .leftJoinAndSelect("term.subjects", "subjects")
    .leftJoinAndSelect("subjects.exams", "exams")
    .leftJoinAndSelect("exams.semester", "semester")
    .leftJoinAndSelect("exams.teacher", "teacher")
    .where("subjects.courseId = :courseId", { courseId })
    .orderBy("term.order", "ASC")
    .getMany();

  return result;
}
