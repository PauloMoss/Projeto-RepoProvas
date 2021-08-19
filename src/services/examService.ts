import { getRepository } from "typeorm";
import { PostParams } from "../protocols/interface";

import Tests from "../entities/Exam";
import Subject from "../entities/Subject";
import Teacher from "../entities/Teacher";
import Semester from "../entities/Semester";
import Category from "../entities/Category";
import Period from "../entities/Semester";
import Course from "../entities/Course";

export async function saveNewTest(params: PostParams) {
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

export async function getSubjectsAndTeachers() {
  const subjects = await getRepository(Subject).find({ relations: ["teachers"] });
  const categories = await getRepository(Category).find();

  const result = { subjects, categories };

  return result;
}

export async function getAllCourses() {
  const courses = await getRepository(Course).find();
  return courses;
}

export async function getCourseSubjectsByTerm(courseId: number) {
  const result = getRepository(Course)
    .createQueryBuilder("course")
    .where("course.id = :courseId", { courseId })
    .leftJoinAndSelect("course.courseTerms", "courseTerms")
    .leftJoinAndSelect("courseTerms.term", "term")
    .leftJoinAndSelect("term.subjects", "subjects")
    .leftJoinAndSelect("subjects.exams", "exams")
    .leftJoinAndSelect("exams.teacher", "teacher")
    .leftJoinAndSelect("exams.semester", "semester")
    .leftJoinAndSelect("exams.category", "category")
    .orderBy("term.order", "ASC")
    .getMany();

  return result;
}

export async function getCourseTeachers(courseId: number) {
  const result = await getRepository(Course).find({
    relations: [
      "courseTeachers",
      "courseTeachers.teacher",
      "courseTeachers.teacher.exams",
      "courseTeachers.teacher.exams.subject",
      "courseTeachers.teacher.exams.semester",
      "courseTeachers.teacher.exams.category",
    ],
    where: { id: courseId },
  });

  return result;
}

export async function getSemesterSubjects() {
  const result = await getRepository(Semester).find({ relations: ["subjects"] });

  return result;
}

export async function getSubjectTests(id: number) {
  const result = await getRepository(Subject).find({
    relations: ["tests", "tests.category", "tests.teacher", "tests.period"],
    where: { id },
  });

  return result;
}

export async function getTeachersTests(id: number) {
  const result = await getRepository(Teacher).find({
    relations: ["tests", "tests.subject", "tests.category", "tests.period"],
    where: { id },
  });

  return result;
}

export async function getTeachers() {
  const result = await getRepository(Teacher).find();

  return result;
}
