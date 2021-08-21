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

describe("GET /categories", () => {
  it("returns status 200 for successfuly get categories", async () => {
    const result = await supertest(app).get("/categories");

    expect(result.status).toEqual(200);
  });
});
