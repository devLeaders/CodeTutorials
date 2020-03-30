import {MigrationInterface, QueryRunner} from "typeorm";

export class addCategory1581294634846 implements MigrationInterface {
    name = 'addCategory1581294634846'

    public async up(queryRunner: QueryRunner): Promise<any> {
        //await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`, undefined);

        await queryRunner.query(`CREATE TABLE "videos_category_category" ("videosId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_d103ad896e8a2bd9f406b1fed6e" PRIMARY KEY ("videosId", "categoryId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_68666f8a5ca56b014d4b4e5402" ON "videos_category_category" ("videosId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_039b08e7db66f6646683eae7b6" ON "videos_category_category" ("categoryId") `, undefined);
        await queryRunner.query(`ALTER TABLE "videos_category_category" ADD CONSTRAINT "FK_68666f8a5ca56b014d4b4e5402a" FOREIGN KEY ("videosId") REFERENCES "videos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "videos_category_category" ADD CONSTRAINT "FK_039b08e7db66f6646683eae7b61" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "videos_categories_category" DROP CONSTRAINT "FK_e0a755380320438818115bb92f6"`, undefined);
        await queryRunner.query(`ALTER TABLE "videos_categories_category" DROP CONSTRAINT "FK_645da06109950573441acb45e16"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_e0a755380320438818115bb92f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_645da06109950573441acb45e1"`, undefined);
        await queryRunner.query(`DROP TABLE "videos_categories_category"`, undefined);
        await queryRunner.query(`DROP TABLE "category"`, undefined);
    }

}
