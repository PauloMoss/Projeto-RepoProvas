import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import * as examController from "./controllers/examController";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/new_test/params", examController.getNewExamParams);

app.post("/new_test", examController.postNewTest);

app.get("/courses", examController.getCourses);

app.get("/course/:id/subjects", examController.getCourseSubjects);

app.get("/course/:id/teachers", examController.getCourseTeachers);

app.get("/subjects", examController.getSubjectsBySemester);

app.get("/teachers", examController.getAllTeachers);

app.get("/tests/subject/:id", examController.getTestsBySubjectId);

app.get("/tests/teacher/:id", examController.getTestsByTeacherId);

export default app;

export async function init() {
  await connectDatabase();
}
