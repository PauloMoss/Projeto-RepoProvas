import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterSemesterTableYearType1629810381568 implements MigrationInterface {
    name = 'AlterSemesterTableYearType1629810381568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "semester" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "semester" ADD "year" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "semester" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "semester" ADD "year" TIMESTAMP NOT NULL`);
    }

}
