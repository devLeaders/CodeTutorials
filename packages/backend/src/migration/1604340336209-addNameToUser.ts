import {MigrationInterface, QueryRunner} from "typeorm";

export class addNameToUser1604340336209 implements MigrationInterface {
    name = 'addNameToUser1604340336209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "name" character varying(255) `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "name"`, undefined);
    }

}
