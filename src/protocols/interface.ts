export interface PostNewExamBody {
  link: string;
  categoryId: number;
  subjectId: number;
  teacherId: number;
  semester: string;
  year: Date;
}

export interface InsertParams {
  link: string;
  categoryId: number;
  subjectId: number;
  teacherId: number;
  semesterId: number;
}
