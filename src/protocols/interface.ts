
export interface PostNewExamBody {
    link: string;
    categoryId: number;
    subjectId: number;
    teacherId: number;
    period: string;
    year: Date
}

export interface PostParams {
    link: string;
    categoryId: number;
    subjectId: number;
    teacherId: number;
    periodId: number
}