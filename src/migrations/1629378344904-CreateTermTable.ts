import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTermTable1629378344904 implements MigrationInterface {
    name = 'CreateTermTable1629378344904'

    public async up(queryRunner: QueryRunner): Promise<void> {await queryRunner.query(`CREATE TABLE "term" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_55b0479f0743f2e5d5ec414821e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "term"`);
    }

}
