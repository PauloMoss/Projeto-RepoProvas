import { Request, Response } from "express";

import * as categoryService from "../services/categoryService";

export async function getCategories(req: Request, res: Response) {
  try {
    const subjects = await categoryService.getAllCategories();

    return res.send(subjects);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
