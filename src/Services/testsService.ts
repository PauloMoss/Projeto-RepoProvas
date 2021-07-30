import { getRepository } from "typeorm";
import { PostNewTestBody } from '../Protocols/interface';

import Test from "../Entities/Tests";
import Subjects from "../Entities/Subjects";

export async function saveNewTest(params:PostNewTestBody) {

    return await getRepository(Test).insert(params)
}

export async function getAllSubjects() {

    const result = await getRepository(Subjects).find({ relations:["teachers"]})

    return result
}
