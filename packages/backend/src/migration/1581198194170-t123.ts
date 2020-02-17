import {MigrationInterface, QueryRunner} from "typeorm";

export class t1231581198194170 implements MigrationInterface {
    name = 't1231581198194170'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "videos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "title" text NOT NULL, "description" text NOT NULL, "dateCreation" text NOT NULL, "country" text NOT NULL, "language" text NOT NULL, "duration" integer NOT NULL, "urlTrailer" text NOT NULL, "urlVideo" text NOT NULL, "urlPhoto" text NOT NULL, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "videos"`, undefined);
    }

}
