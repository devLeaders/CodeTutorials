import {MigrationInterface, QueryRunner} from "typeorm";

export class notifications1597874404112 implements MigrationInterface {
    name = 'notifications1597874404112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "devices" ("firebaseToken" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_c1d838cd479ce3af5173eff8942" PRIMARY KEY ("firebaseToken"))`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_e8a5d59f0ac3040395f159507c6" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_e8a5d59f0ac3040395f159507c6"`, undefined);
        await queryRunner.query(`DROP TABLE "devices"`, undefined);
    }

}
