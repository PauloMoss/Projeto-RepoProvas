import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCourseTableAndAddForeignKey1629380194523 implements MigrationInterface {
    name = 'CreateCourseTableAndAddForeignKey1629380194523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "courseId" integer`);
        await queryRunner.query(`ALTER TABLE "subject" ADD CONSTRAINT "FK_9a270c7a3ceac259fbe99163d48" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP CONSTRAINT "FK_9a270c7a3ceac259fbe99163d48"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "courseId"`);
        await queryRunner.query(`DROP TABLE "course"`);
    }

}
