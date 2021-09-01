import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTermAndSubjectTableAddForeignKey1629380479671 implements MigrationInterface {
    name = 'AlterTermAndSubjectTableAddForeignKey1629380479671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" ADD CONSTRAINT "FK_98a5772794ad96b1ea38cc7fea0" FOREIGN KEY ("termId") REFERENCES "term"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP CONSTRAINT "FK_98a5772794ad96b1ea38cc7fea0"`);
    }

}
