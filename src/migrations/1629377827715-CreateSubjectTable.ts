import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSubjectTable1629377827715 implements MigrationInterface {
    name = 'CreateSubjectTable1629377827715'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subject" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "semesterId" integer NOT NULL, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "subject"`);
    }

}
