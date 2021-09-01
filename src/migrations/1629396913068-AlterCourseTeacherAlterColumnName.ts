import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterCourseTeacherAlterColumnName1629396913068 implements MigrationInterface {
    name = 'AlterCourseTeacherAlterColumnName1629396913068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courseTeacher" DROP COLUMN "subjectId"`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" DROP CONSTRAINT "FK_816a32665c1146d233873209951"`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" ALTER COLUMN "courseId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" ADD CONSTRAINT "FK_816a32665c1146d233873209951" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courseTeacher" DROP CONSTRAINT "FK_816a32665c1146d233873209951"`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" ALTER COLUMN "courseId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" ADD CONSTRAINT "FK_816a32665c1146d233873209951" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courseTeacher" ADD "subjectId" integer NOT NULL`);
    }

}
