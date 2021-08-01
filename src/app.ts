import express from 'express';
import cors from 'cors';
import "reflect-metadata";

import connectDatabase from "./database";
import * as testsController from './Controllers/testsController'

const app = express();

app.use(cors());
app.use(express.json());

app.get("/subjects/new_test", testsController.getSubjectsWithTeachers);

app.post("/new_test", testsController.postNewTest);

app.get("/subjects", testsController.getSubjectsBySemester);

app.get("/teachers", testsController.getAllTeachers);

app.get("/tests/subject/:id", testsController.getTestsBySubjectId);

app.get("/tests/teacher/:id", testsController.getTestsByTeacherId);

app.get("/teste", (req,res) => {
    res.send("no ar!")
});

export default app;

export async function init() {
  
    await connectDatabase()
}