import faker from 'faker';


export function createNewTest() {
    const link = faker.internet.url();
    const subjectId = 1;
    const teacherId = 1;
    const categoryId = 1;
    const period = "2021.2";
    const year = faker.date.recent()

    return { link, subjectId, teacherId, categoryId, period, year }
}

export function createNewSubject() {
    const name = "Something Fake";
    const semesterId = 1;
    return {name, semesterId}
}

export function createNewSemester() {
    const name = "1 semestre";
    return name
}

export function createNewTeacher() {
    const name = faker.name.findName();
    return name
}

export function createNewCategory() {
    const name = faker.fake("prova");
    return name
}

export function createNewPeriod() {
    const name = "2021.2";
    const year = "2021"
    return {name, year}
}

export function subjectTeacherRelation() {
    const subjectId = 1;
    const teacherId = 1;
    return [subjectId, teacherId]
}