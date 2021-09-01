import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCourseTeacherTableAndForeignKey1629380948999 implements MigrationInterface {
    name = 'CreateCourseTeacherTableAndForeignKey1629380948999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "courseTeacher" ("id" SERIAL NOT NULL, "subjectId" integer NOT NULL, "teacherId" integer NOT NULL, "courseId" integer, CONSTRAINT "PK_7a42f58f0023a0f80a436bd527c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" ADD CONSTRAINT "FK_816a32665c1146d233873209951" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" ADD CONSTRAINT "FK_9366c71a2bf302af1a610067f02" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courseTeacher" DROP CONSTRAINT "FK_9366c71a2bf302af1a610067f02"`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" DROP CONSTRAINT "FK_816a32665c1146d233873209951"`);
        await queryRunner.query(`DROP TABLE "courseTeacher"`);
    }

}
