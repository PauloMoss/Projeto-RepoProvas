import { getRepository } from "typeorm";

import Course from "../entities/Course";
import Subject from "../entities/Subject";
import Teacher from "../entities/Teacher";

export async function getAllCourses() {
  const courses = await getRepository(Course).find();
  return courses;
}

export async function getCourseAllSubjects(courseId: number) {
  const result = getRepository(Subject)
    .createQueryBuilder("subject")
    .where("subject.courseId = :courseId", { courseId })
    .getMany();

  return result;
}

export async function getAllSubjectTeachers(subjectId: number) {
  const result = getRepository(Teacher)
    .createQueryBuilder("teacher")
    .leftJoin("teacher.subjectTeachers", "subjectTeachers")
    .where("subjectTeachers.subjectId = :subjectId", { subjectId })
    .getMany();

  return result;
}
