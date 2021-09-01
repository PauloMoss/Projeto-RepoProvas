import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTermTableAddOrderColumn1629381738195 implements MigrationInterface {
    name = 'AlterTermTableAddOrderColumn1629381738195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "term" ADD "order" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "term" DROP COLUMN "order"`);
    }

}
