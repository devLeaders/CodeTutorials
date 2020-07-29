import {MigrationInterface, QueryRunner} from "typeorm";

export class insertCategory1581295131236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`INSERT INTO public.category (name) VALUES('Java');`);
        await queryRunner.query(`INSERT INTO public.category (name) VALUES('Bazy Danych');`);
        await queryRunner.query(`INSERT INTO public.category (name) VALUES('DevOps');`);
        await queryRunner.query(`INSERT INTO public.category (name) VALUES('Javascript');`);
        await queryRunner.query(`INSERT INTO public.category (name) VALUES('React');`);
        await queryRunner.query(`INSERT INTO public.category (name) VALUES('Angular');`);
        await queryRunner.query(`INSERT INTO public.category (name) VALUES('CSS');`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
