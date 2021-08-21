import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";

import "../../src/setup";
import app, { init } from "../../src/app";
import { clearDatabase, populateDatabase } from "../utils/database";

beforeAll(init);

beforeEach(async () => {
  await clearDatabase();
  await populateDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /courses", () => {
  it("returns status 200 for successfuly get courses", async () => {
    const result = await supertest(app).get("/courses");

    expect(result.status).toEqual(200);
  });
});

describe("GET /course/:id/subjects", () => {
  it("returns status 200 for successfuly get all subjects for chosen course", async () => {
    const result = await supertest(app).get("/course/1/subjects");

    expect(result.status).toEqual(200);
  });
});

describe("GET /subject/:id/teachers", () => {
  it("returns status 200 for successfuly get all teachers for chosen subject", async () => {
    const result = await supertest(app).get("/subject/1/teachers");

    expect(result.status).toEqual(200);
  });
});
