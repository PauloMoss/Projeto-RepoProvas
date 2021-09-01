import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCourseTermTableAndForeignKey1629396115806 implements MigrationInterface {
    name = 'CreateCourseTermTableAndForeignKey1629396115806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "courseTerm" ("id" SERIAL NOT NULL, "courseId" integer NOT NULL, "termId" integer NOT NULL, CONSTRAINT "PK_9f094d825ffcbce3cc2df561f6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "courseTerm" ADD CONSTRAINT "FK_f36a8635f8d6654d2f8f80a6836" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courseTerm" ADD CONSTRAINT "FK_2b8755f28431a89791cc23e1262" FOREIGN KEY ("termId") REFERENCES "term"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courseTerm" DROP CONSTRAINT "FK_2b8755f28431a89791cc23e1262"`);
        await queryRunner.query(`ALTER TABLE "courseTerm" DROP CONSTRAINT "FK_f36a8635f8d6654d2f8f80a6836"`);
        await queryRunner.query(`DROP TABLE "courseTerm"`);
    }

}
