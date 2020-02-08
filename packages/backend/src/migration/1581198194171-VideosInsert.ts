import {MigrationInterface, QueryRunner} from "typeorm";

export class VideosInsert1581198194171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO public.videos
        (id, created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(uuid_generate_v4(), now(), 'Test', 'Testowy', '2019-08-08', 'pl', 'pl', 10, 'gg', 'gg', 'gg');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
