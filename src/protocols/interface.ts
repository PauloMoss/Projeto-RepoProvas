export interface PostNewExamBody {
  link: string;
  categoryId: number;
  subjectId: number;
  teacherId: number;
  semester: SemesterBody;
}

export interface InsertParams {
  link: string;
  categoryId: number;
  subjectId: number;
  teacherId: number;
  semesterId: number;
}

export interface SemesterBody {
  year: string;
  name: string;
}
