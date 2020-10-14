import {MigrationInterface, QueryRunner} from "typeorm";

export class tokens1600707228300 implements MigrationInterface {
	name = 'tokens1600707228300'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`CREATE TABLE "tokens" ("id" SERIAL NOT NULL, "token" text NOT NULL, "dateExpired" date NOT NULL, CONSTRAINT "PK_3001e89ada36263dabf1fb6210a" PRIMARY KEY ("id"))`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "tokens"`);
	}

}