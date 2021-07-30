import express from 'express';
import cors from 'cors';
import "reflect-metadata";

import connectDatabase from "./database";
import * as testsController from './Controllers/testsController'

const app = express();

app.use(cors());
app.use(express.json());

app.get("/subjects", testsController.getSubjects);

app.post("/new_test", testsController.postNewTest);

export default app;

export async function init() {
    await connectDatabase();
  }