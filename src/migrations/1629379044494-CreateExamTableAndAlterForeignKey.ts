import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateExamTableAndAlterForeignKey1629379044494 implements MigrationInterface {
    name = 'CreateExamTableAndAlterForeignKey1629379044494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exam" ("id" SERIAL NOT NULL, "link" character varying NOT NULL, "subjectId" integer NOT NULL, "teacherId" integer NOT NULL, "semesterId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_56071ab3a94aeac01f1b5ab74aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exam" ADD CONSTRAINT "FK_d0c14897766a526d7b52cd78977" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam" ADD CONSTRAINT "FK_d8925a9c61fc74fdacfc5f0b2db" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam" ADD CONSTRAINT "FK_646b4fbbea33508a291d0293d0c" FOREIGN KEY ("semesterId") REFERENCES "semester"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam" ADD CONSTRAINT "FK_f47f68886316bb8e23df8281024" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exam" DROP CONSTRAINT "FK_f47f68886316bb8e23df8281024"`);
        await queryRunner.query(`ALTER TABLE "exam" DROP CONSTRAINT "FK_646b4fbbea33508a291d0293d0c"`);
        await queryRunner.query(`ALTER TABLE "exam" DROP CONSTRAINT "FK_d8925a9c61fc74fdacfc5f0b2db"`);
        await queryRunner.query(`ALTER TABLE "exam" DROP CONSTRAINT "FK_d0c14897766a526d7b52cd78977"`);
        await queryRunner.query(`DROP TABLE "exam"`);
    }

}
