import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";

import "../../src/setup";
import app, { init } from "../../src/app";
import Exam from "../../src/entities/Exam";
import { createNewExam } from "../utils/Factory";
import { clearDatabase, populateDatabase, insertFakeExam } from "../utils/database";

beforeAll(init);

beforeEach(async () => {
  await clearDatabase();
  await populateDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /new_test", () => {
  it("returns status 201 for successfuly created test", async () => {
    const body = createNewExam();

    const beforeInsert = await getRepository(Exam).find();
    const result = await supertest(app).post("/new_test").send(body);
    const afterInsert = await getRepository(Exam).find();

    expect(result.status).toEqual(201);
    expect(beforeInsert.length).toEqual(0);
    expect(afterInsert.length).toEqual(1);
  });

  it("returns status 400 for invalid params", async () => {
    const body = createNewExam();
    body.link = "";

    const beforeInsert = await getRepository(Exam).find();
    const result = await supertest(app).post("/new_test").send(body);
    const afterInsert = await getRepository(Exam).find();

    expect(result.status).toEqual(400);
    expect(beforeInsert.length).toEqual(0);
    expect(afterInsert.length).toEqual(0);
  });
});

describe("GET /course/:id/teachers/exams", () => {
  beforeEach(insertFakeExam);

  it("returns status 200 for successfuly get all teachers exams from chosen course", async () => {
    const result = await supertest(app).get("/course/1/teachers/exams");

    expect(result.status).toEqual(200);
  });
});

describe("GET /course/:id/subjects/exams", () => {
  beforeEach(insertFakeExam);

  it("returns status 200 for successfuly get all subjects exams from chosen course", async () => {
    const result = await supertest(app).get("/course/1/subjects/exams");

    expect(result.status).toEqual(200);
  });
});
