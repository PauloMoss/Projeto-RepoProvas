import joi from "joi";

export const newExamSchema = joi.object({
  link: joi.string().uri().required(),
  teacherId: joi.number().integer().min(1).required(),
  subjectId: joi.number().integer().min(1).required(),
  categoryId: joi.number().integer().min(1).required(),
  semester: joi.string().min(6).max(6).required(),
  year: joi.date(),
});
