import {MigrationInterface, QueryRunner} from "typeorm";

export class VideosInsert1581198194171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        // await queryRunner.query(`INSERT INTO public.videos
        // (id, created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        // VALUES(uuid_generate_v4(), now(), 'Test', 'Testowy', '04-03-2019', 'pl', 'pl', 3600, 'mov_bbb.mp4', 'mov_bbb.mp4', 'abcd1.jpg');
        // `)

        await queryRunner.query(`INSERT INTO public.videos (id, created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto") 
        VALUES(1, now(), 'Spring Security od podstaw - przykład formularza logowania', 'Spring Security dostarcza funkcje pozwalające na zabezpieczenie aplikacji. W tym materiale od podstaw pokazuje w jaki sposób utworzyć formularz logowania, oraz jak wygląda autoryzacja użytkownika.', '04-03-2019', 'pl', 'pl', 3600, 'mov_bbb.mp4', 'mov_bbb.mp4', 'abcd1.jpg');`)
        await queryRunner.query(`INSERT INTO public.videos (id, created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto") 
        VALUES(2, now(), 'Docker od podstaw','Docker to narzędzie, które ułatwia wdrażanie aplikacji. Jest narzędziem dla sieciowców, devopsów i developerów. Obejrzyj szkolenie w trakcie, którego przybliżę Ci jak programiści wykorzystując narzędzie Docker w codziennej pracy.', '18-03-2019', 'pl','pl', 3600, 'mov_bbb.mp4', 'mov_bbb.mp4', 'abxd2.jpg');`)
        await queryRunner.query(`INSERT INTO public.videos
        (id, created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(3, now(), 
        'Programowanie wielowątkowe w języku Java', 
        'Liquibase - zarządzanie zmianami w bazach danych:', 
        '03-06-2019', 
        'pl', 
        'pl', 
        3600, 
        'mov_bbb.mp4', 
        'mov_bbb.mp4', 
        'abcd3.jpg');
        `)
        await queryRunner.query(`INSERT INTO public.videos
        (id, created, title, description, "dateCreation", country, "language", duration, "urlTrailer", "urlVideo", "urlPhoto")
        VALUES(4, now(), 
        'Health check, metryki, Prometheus i Grafana!', 
        'REST client w Java', 
        '08-07-2019', 
        'pl', 
        'pl', 
        3600, 
        'mov_bbb.mp4', 
        'mov_bbb.mp4', 
        'abcd4.jpg');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
