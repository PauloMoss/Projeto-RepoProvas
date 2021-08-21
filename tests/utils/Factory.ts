import faker from "faker";

export function createNewExam() {
  const link = faker.internet.url();
  const subjectId = 1;
  const teacherId = 1;
  const categoryId = 1;
  const semester = "2021.2";
  const year = faker.date.recent();

  return { link, subjectId, teacherId, categoryId, semester, year };
}

export function createNewCourse() {
  const name = "Software Engineering";
  return { name };
}

export function createNewSubject() {
  const name = "Subject Fake";
  const termId = 1;
  const courseId = 1;
  return { name, termId, courseId };
}

export function createNewTerm() {
  const name = "1 semestre";
  const order = 1;
  return { name, order };
}

export function createNewTeacher() {
  const name = faker.name.findName();
  return name;
}

export function createNewCategory() {
  const name = faker.fake("Prova 1");
  return name;
}

export function createNewSemester() {
  const name = "2021.2";
  const year = "2021";
  return { name, year };
}

export function createNewCourseTeacherRelation() {
  const teacherId = 1;
  const courseId = 1;
  return { teacherId, courseId };
}

export function createNewSubjectTeacherRelation() {
  const teacherId = 1;
  const subjectId = 1;
  return { subjectId, teacherId };
}
