import {MigrationInterface, QueryRunner} from "typeorm";

export class usersTable1582983837547 implements MigrationInterface {
    name = 'usersTable1582983837547'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "salt" character varying NOT NULL, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Users"`, undefined);
    }

}
