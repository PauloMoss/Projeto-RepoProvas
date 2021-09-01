import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterColumTermNameSubjectTable1629378583924 implements MigrationInterface {
    name = 'AlterColumTermNameSubjectTable1629378583924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" RENAME COLUMN "semesterId" TO "termId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" RENAME COLUMN "termId" TO "semesterId"`);
    }

}
