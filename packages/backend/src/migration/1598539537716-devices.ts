import {MigrationInterface, QueryRunner} from "typeorm";

export class devices1598539537716 implements MigrationInterface {
    name = 'devices1598539537716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "devices" ("firebaseTokens" text NOT NULL, "HmsTokens" text NOT NULL, "userId" integer, CONSTRAINT "PK_afedf0ac59f95af992df9f188a1" PRIMARY KEY ("firebaseTokens"))`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_e8a5d59f0ac3040395f159507c6" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_e8a5d59f0ac3040395f159507c6"`, undefined);
        await queryRunner.query(`DROP TABLE "devices"`, undefined);
    }

}
