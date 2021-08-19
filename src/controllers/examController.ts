import { Request, Response } from "express";
import dayjs from "dayjs";

import { PostNewExamBody } from "../protocols/interface";
import * as examService from "../services/examService";
import { newTestSchema } from "../schemas/testsSchemas";

export async function postNewTest(req: Request, res: Response) {
  try {
    const { link, subjectId, teacherId, categoryId, period } =
      req.body as PostNewExamBody;
    let { year } = req.body as PostNewExamBody;

    if (!link || !subjectId || !teacherId || !categoryId || !period || !year) {
      return res.sendStatus(400);
    }

    const err = newTestSchema.validate({
      link,
      subjectId,
      teacherId,
      categoryId,
      period,
      year,
    }).error;
    if (err) {
      return res.sendStatus(400);
    }

    const periodId = await examService.checkYears(period, dayjs(year).format("YYYY"));

    const params = { link, subjectId, teacherId, categoryId, periodId };

    await examService.saveNewTest(params);

    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getNewExamParams(req: Request, res: Response) {
  try {
    const subjects = await examService.getSubjectsAndTeachers();

    return res.send(subjects);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getCourses(req: Request, res: Response) {
  try {
    const courses = await examService.getAllCourses();

    return res.send(courses);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getCourseSubjects(req: Request, res: Response) {
  try {
    const courseId = Number(req.params.id);
    const subjects = await examService.getCourseSubjectsByTerm(courseId);

    return res.send(subjects);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getCourseTeachers(req: Request, res: Response) {
  try {
    const courseId = Number(req.params.id);
    const teachers = await examService.getCourseTeachers(courseId);

    return res.send(teachers);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
export async function getSubjectsBySemester(req: Request, res: Response) {
  try {
    const subjects = await examService.getSemesterSubjects();

    return res.send(subjects);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getTestsByTeacherId(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const subjects = await examService.getTeachersTests(id);

    return res.send(subjects);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getAllTeachers(req: Request, res: Response) {
  try {
    const teachers = await examService.getTeachers();

    return res.send(teachers);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getTestsBySubjectId(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const subjectTests = await examService.getSubjectTests(id);

    return res.send(subjectTests);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
