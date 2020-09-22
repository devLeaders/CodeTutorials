import {MigrationInterface, QueryRunner} from "typeorm";

export class tokens1600707228300 implements MigrationInterface {
	name = 'tokens1600707228300'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`CREATE TABLE "tokens" ("id" SERIAL NOT NULL, "token" text NOT NULL, "dateExpired" date NOT NULL, CONSTRAINT "PK_3001e89ada36263dabf1fb6210a" PRIMARY KEY ("id"))`);
		await queryRunner.query(`CREATE TABLE "devices" ("id" SERIAL NOT NULL, "firebaseTokens" text NOT NULL, "HmsTokens" text NOT NULL, "userId" integer, CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`);
		await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_e8a5d59f0ac3040395f159507c6" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_e8a5d59f0ac3040395f159507c6"`);
		await queryRunner.query(`DROP TABLE "devices"`);
		await queryRunner.query(`DROP TABLE "tokens"`);
	}

}