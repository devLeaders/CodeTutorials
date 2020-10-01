import {MigrationInterface, QueryRunner} from "typeorm";

export class YoutubeId1601563388887 implements MigrationInterface {
    name = 'YoutubeId1601563388887'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" ADD "idYoutube" text`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" DROP COLUMN "idYoutube"`, undefined);
    }

}
