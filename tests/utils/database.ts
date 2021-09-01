import { getConnection, getRepository } from "typeorm";

import Exam from "../../src/entities/Exam";
import Category from "../../src/entities/Category";
import Semester from "../../src/entities/Semester";
import Term from "../../src/entities/Term";
import Subject from "../../src/entities/Subject";
import Teacher from "../../src/entities/Teacher";
import Course from "../../src/entities/Course";
import * as Factory from "./Factory";
import CourseTeacher from "../../src/entities/CourseTeacher";
import SubjectTeacher from "../../src/entities/SubjectTeacher";

export async function clearDatabase() {
  await getConnection().query("TRUNCATE term RESTART IDENTITY CASCADE");
  await getConnection().query("TRUNCATE semester RESTART IDENTITY CASCADE");
  await getConnection().query("TRUNCATE teacher RESTART IDENTITY CASCADE");
  await getConnection().query("TRUNCATE category RESTART IDENTITY CASCADE");
}

export async function insertFakeExam() {
  const params = Factory.createNewExam();

  const { link, subjectId, teacherId, categoryId } = params;
  const semesterId = 1;
  const body = { link, subjectId, teacherId, semesterId, categoryId };
  await getRepository(Exam).insert(body);
}

export async function populateDatabase() {
  const course = Factory.createNewCourse();
  const category = Factory.createNewCategory();
  const semester = Factory.createNewSemester();
  const term = Factory.createNewTerm();
  const teacher = Factory.createNewTeacher();
  const subject = Factory.createNewSubject();
  const courseTeacherRelation = Factory.createNewCourseTeacherRelation();
  const subjectTeacherRelation = Factory.createNewSubjectTeacherRelation();

  await getRepository(Course).insert(course);
  await getRepository(Category).insert({ name: category });
  await getRepository(Semester).insert(semester);
  await getRepository(Term).insert(term);
  await getRepository(Subject).insert(subject);
  await getRepository(Teacher).insert({ name: teacher });
  await getRepository(CourseTeacher).insert(courseTeacherRelation);
  await getRepository(SubjectTeacher).insert(subjectTeacherRelation);
}
