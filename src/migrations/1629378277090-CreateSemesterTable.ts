import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSemesterTable1629378277090 implements MigrationInterface {
    name = 'CreateSemesterTable1629378277090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "semester" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "year" TIMESTAMP NOT NULL, CONSTRAINT "PK_9129c1fd35aa4aded7a9825b38d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "semester"`);
    }

}
