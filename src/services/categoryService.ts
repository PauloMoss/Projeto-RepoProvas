import { getRepository } from "typeorm";

import Category from "../entities/Category";

export async function getAllCategories() {
  const result = await getRepository(Category).find();

  return result;
}
