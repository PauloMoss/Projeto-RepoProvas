import { getRepository } from "typeorm";
import { InsertParams } from "../protocols/interface";

import Tests from "../entities/Exam";
import Subject from "../entities/Subject";
import Teacher from "../entities/Teacher";
import Semester from "../entities/Semester";
import SubjectTeacher from "../entities/SubjectTeacher";
import Period from "../entities/Semester";
import Course from "../entities/Course";

import Term from "../entities/Term";

export async function saveNewTest(params: InsertParams) {
  return await getRepository(Tests).insert(params);
}

export async function checkYears(period: string, year: string) {
  const existingYear = await getRepository(Period).find({ where: { name: period } });

  if (existingYear.length === 0) {
    return (await getRepository(Period).insert({ name: period, year })).generatedMaps[0]
      .id;
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
