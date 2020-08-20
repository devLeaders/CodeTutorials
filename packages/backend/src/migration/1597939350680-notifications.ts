import {MigrationInterface, QueryRunner} from "typeorm";

export class notifications1597939350680 implements MigrationInterface {
    name = 'notifications1597939350680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "PK_c1d838cd479ce3af5173eff8942"`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "firebaseToken"`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD "firebaseToken" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "PK_c1d838cd479ce3af5173eff8942" PRIMARY KEY ("firebaseToken")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "PK_c1d838cd479ce3af5173eff8942"`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "firebaseToken"`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD "firebaseToken" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "PK_c1d838cd479ce3af5173eff8942" PRIMARY KEY ("firebaseToken")`, undefined);
    }

}
