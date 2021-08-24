import joi from "joi";

export const newExamSchema = joi.object({
  link: joi.string().uri().required(),
  teacherId: joi.number().integer().min(1).required(),
  subjectId: joi.number().integer().min(1).required(),
  categoryId: joi.number().integer().min(1).required(),
  semester: {
    year: joi.string().min(4).max(4).required(),
    name: joi.string().min(1).max(1).required(),
  },
});
