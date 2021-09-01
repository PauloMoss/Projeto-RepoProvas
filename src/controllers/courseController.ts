import { Request, Response } from "express";

import * as courseService from "../services/courseService";

export async function getCourses(req: Request, res: Response) {
  try {
    const courses = await courseService.getAllCourses();

    return res.send(courses);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getCourseSubjects(req: Request, res: Response) {
  try {
    const courseId = Number(req.params.id);
    const subjects = await courseService.getCourseAllSubjects(courseId);

    return res.send(subjects);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getSubjectTeachers(req: Request, res: Response) {
  try {
    const subjectId = Number(req.params.id);
    const subjects = await courseService.getAllSubjectTeachers(subjectId);

    return res.send(subjects);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
