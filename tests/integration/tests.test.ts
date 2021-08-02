import supertest from "supertest"
import { getConnection, getRepository } from "typeorm";

import '../../src/setup';
import app, { init } from "../../src/app";
import Tests from "../../src/Entities/Tests";
import { createNewTest } from "../utils/Factory";
import { clearDatabase, populateDatabase, insertFakeTest } from "../utils/database";

beforeAll(init);

beforeEach(async () => {
    await clearDatabase();
    await populateDatabase();
})

afterAll( async ()=>{
    await getConnection().close();
})

describe("POST /new_test",() => {
    it("returns status 201 for successfuly created test", async () => {
        const body = createNewTest()

        const beforeInsert = await getRepository(Tests).find()
        const result = await supertest(app).post("/new_test").send(body);
        const afterInsert = await getRepository(Tests).find()

        expect(result.status).toEqual(201)
        expect(beforeInsert.length).toEqual(0)
        expect(afterInsert.length).toEqual(1)
    })

    it("returns status 400 for invalid params", async () => {
        const body = createNewTest();
        body.link = "";

        const beforeInsert = await getRepository(Tests).find()
        const result = await supertest(app).post("/new_test").send(body);
        const afterInsert = await getRepository(Tests).find()

        expect(result.status).toEqual(400)
        expect(beforeInsert.length).toEqual(0)
        expect(afterInsert.length).toEqual(0)
    })
})

describe("GET /subjects/new_test", () => {
    it("returns status 200 for successfuly get subjects and teachers", async () => {

        const result = await supertest(app).get("/subjects/new_test");

        expect(result.status).toEqual(200);
        expect(result.body.subjects.length).toEqual(1);
        expect(result.body.categories.length).toEqual(1);
    })
})

describe("GET /subjects", () => {
    it("returns status 200 for successfuly get subjects by semesters", async () => {

        const result = await supertest(app).get("/subjects");

        expect(result.status).toEqual(200);
        expect(result.body[0].name).toEqual("1 semestre");
        expect(result.body[0].subjects.length).toEqual(1);
    })
})

describe("GET /teachers", () => {
    it("returns status 200 for successfuly get all teachers", async () => {

        const result = await supertest(app).get("/teachers");
        
        expect(result.status).toEqual(200);
        expect(result.body[0].name).not.toEqual(undefined);
        expect(result.body[0].id).toEqual(1);
    })
})

describe("GET /tests/subject/:id", () => {
    it("returns status 200 for successfuly get all tests for subject with id", async () => {

        await insertFakeTest();

        const result = await supertest(app).get("/tests/subject/1");

        expect(result.status).toEqual(200);
        expect(result.body[0].name).not.toEqual(undefined);
        expect(result.body[0].tests.length).toEqual(1);
    })
})

describe("GET /tests/teacher/:id", () => {
    it("returns status 200 for successfuly get all tests for teacher with id", async () => {

        const result = await supertest(app).get("/tests/teacher/1");

        expect(result.status).toEqual(200);
        expect(result.body[0].name).not.toEqual(undefined);
        expect(result.body[0].tests.length).toEqual(0);
    })
})