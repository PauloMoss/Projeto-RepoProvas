import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import * as categoryController from "./controllers/categoryController";
import * as courseController from "./controllers/courseController";
import * as examController from "./controllers/examController";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/new_test", examController.postNewExam);

app.get("/categories", categoryController.getCategories);

app.get("/courses", courseController.getCourses);

app.get("/course/:id/subjects", courseController.getCourseSubjects);

app.get("/subject/:id/teachers", courseController.getSubjectTeachers);

app.get("/course/:id/teachers/exams", examController.getExamsFromCourseTeachers);

app.get("/course/:id/subjects/exams", examController.getExamsFromCourseSubjects);

export default app;

export async function init() {
  await connectDatabase();
}
