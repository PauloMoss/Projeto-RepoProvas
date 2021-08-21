import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterSubjectAddColumnCourseId1629502145599 implements MigrationInterface {
    name = 'AlterSubjectAddColumnCourseId1629502145599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP CONSTRAINT "FK_9a270c7a3ceac259fbe99163d48"`);
        await queryRunner.query(`ALTER TABLE "subject" ALTER COLUMN "courseId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subject" ADD CONSTRAINT "FK_9a270c7a3ceac259fbe99163d48" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP CONSTRAINT "FK_9a270c7a3ceac259fbe99163d48"`);
        await queryRunner.query(`ALTER TABLE "subject" ALTER COLUMN "courseId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subject" ADD CONSTRAINT "FK_9a270c7a3ceac259fbe99163d48" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
