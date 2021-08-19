import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTeacherTable1629377894527 implements MigrationInterface {
    name = 'CreateTeacherTable1629377894527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "teacher"`);
    }

}
