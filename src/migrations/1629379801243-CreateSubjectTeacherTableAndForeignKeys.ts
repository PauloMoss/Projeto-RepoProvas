import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSubjectTeacherTableAndForeignKeys1629379801243 implements MigrationInterface {
    name = 'CreateSubjectTeacherTableAndForeignKeys1629379801243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjectTeacher" ("id" SERIAL NOT NULL, "subjectId" integer NOT NULL, "teacherId" integer NOT NULL, CONSTRAINT "PK_c407ebb33e054484ca5e91598af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subjectTeacher" ADD CONSTRAINT "FK_3d733998712b7aa23d0fd8bd73c" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjectTeacher" ADD CONSTRAINT "FK_1cdc6e7e69f4e507bb70bf67fa4" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjectTeacher" DROP CONSTRAINT "FK_1cdc6e7e69f4e507bb70bf67fa4"`);
        await queryRunner.query(`ALTER TABLE "subjectTeacher" DROP CONSTRAINT "FK_3d733998712b7aa23d0fd8bd73c"`);
        await queryRunner.query(`DROP TABLE "subjectTeacher"`);
    }

}
