import {MigrationInterface, QueryRunner} from "typeorm";

export class insertCategory1581295131236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(1 ,'Java');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(2 ,'MongoDB');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(3 ,'Spring');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(4 ,'DevTools');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(5 ,'IT');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(6 ,'REST');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(7 ,'DevOps');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(8 ,'Bazpieczeństwo');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(9 ,'Quarkus');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(10 ,'Angular');`);
        await queryRunner.query(`INSERT INTO public.category (id, name) VALUES(11 ,'JavaScript');`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(1 ,1);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(2 ,2);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(3 ,1);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(4 ,1);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(4 ,3);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(4 ,4);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(5 ,3);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(5 ,2);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(6 ,1);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(7 ,5);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(8 ,1);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(9 ,6);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(9 ,3);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(10 ,7);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(10 ,3);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(11 ,3);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(11 ,7);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(11 ,8);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(12 ,9);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(12 ,1);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(13 ,1);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(14 ,3);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(15 ,3);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(15 ,8);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(16 ,10);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(16 ,11);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(17 ,1);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(18 ,1);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(19 ,1);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(19 ,10);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(20 ,1);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(20 ,3);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(21 ,3);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(21 ,4);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(22 ,3);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(23 ,4);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(23 ,7);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(24 ,7);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(24 ,3);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(24 ,4);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(25 ,7);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(25 ,3);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(25 ,4);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(26 ,4);`);

        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(27 ,4);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(27 ,7);`);
        await queryRunner.query(`INSERT INTO public.videos_category_category ("videosId", "categoryId") VALUES(27 ,3);`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
