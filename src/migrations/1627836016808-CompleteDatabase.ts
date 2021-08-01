import {MigrationInterface, QueryRunner} from "typeorm";

export class CompleteDatabase1627836016808 implements MigrationInterface {
    name = 'CompleteDatabase1627836016808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "subjects_fk0"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "tests_fk0"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "tests_fk1"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "tests_fk2"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "tests_fk3"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP CONSTRAINT "subjects_teachers_fk0"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP CONSTRAINT "subjects_teachers_fk1"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP CONSTRAINT "PK_ef9c50eff570bef71d21919658a"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD CONSTRAINT "PK_ce08be0770ce7fa19988cc6c3f3" PRIMARY KEY ("subjectId", "teacherId")`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "semester" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "semester" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "subjects_name_key"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "period" DROP CONSTRAINT "period_name_key"`);
        await queryRunner.query(`ALTER TABLE "period" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "period" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "period" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "period" ADD "year" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "tests_testLink_key"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "link"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "link" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_0bddd9966effb64af9f3a7ae9b" ON "subjects_teachers" ("subjectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1cdb601a86414f5a951010cbe3" ON "subjects_teachers" ("teacherId") `);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_b40f2ecc6d3f61e93a945091931" FOREIGN KEY ("semesterId") REFERENCES "semester"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_910215de6563cf9f350eeb60a1d" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_7f83dda887820244f729fe7e4c0" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_efa5a6e1633a29cb951532ee424" FOREIGN KEY ("periodId") REFERENCES "period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD CONSTRAINT "FK_0bddd9966effb64af9f3a7ae9b4" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD CONSTRAINT "FK_1cdb601a86414f5a951010cbe3d" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP CONSTRAINT "FK_1cdb601a86414f5a951010cbe3d"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP CONSTRAINT "FK_0bddd9966effb64af9f3a7ae9b4"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_efa5a6e1633a29cb951532ee424"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_7f83dda887820244f729fe7e4c0"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_910215de6563cf9f350eeb60a1d"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_b40f2ecc6d3f61e93a945091931"`);
        await queryRunner.query(`DROP INDEX "IDX_1cdb601a86414f5a951010cbe3"`);
        await queryRunner.query(`DROP INDEX "IDX_0bddd9966effb64af9f3a7ae9b"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "link"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "link" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "tests_testLink_key" UNIQUE ("link")`);
        await queryRunner.query(`ALTER TABLE "period" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "period" ADD "year" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "period" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "period" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "period" ADD CONSTRAINT "period_name_key" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "subjects_name_key" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "semester" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "semester" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP CONSTRAINT "PK_ce08be0770ce7fa19988cc6c3f3"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD CONSTRAINT "PK_ef9c50eff570bef71d21919658a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD CONSTRAINT "subjects_teachers_fk1" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD CONSTRAINT "subjects_teachers_fk0" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "tests_fk3" FOREIGN KEY ("periodId") REFERENCES "period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "tests_fk2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("semesterId") REFERENCES "semester"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
