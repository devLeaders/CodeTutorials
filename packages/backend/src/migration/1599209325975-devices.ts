import {MigrationInterface, QueryRunner} from "typeorm";

export class devices1599209325975 implements MigrationInterface {
    name = 'devices1599209325975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "PK_afedf0ac59f95af992df9f188a1"`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "PK_63fc60df656b4ce4ca98c5e0528" PRIMARY KEY ("firebaseTokens", "id")`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "PK_63fc60df656b4ce4ca98c5e0528"`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "PK_b1514758245c12daf43486dd1f0"`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "PK_63fc60df656b4ce4ca98c5e0528" PRIMARY KEY ("firebaseTokens", "id")`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "PK_63fc60df656b4ce4ca98c5e0528"`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "PK_afedf0ac59f95af992df9f188a1" PRIMARY KEY ("firebaseTokens")`, undefined);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "id"`, undefined);
    }

}
