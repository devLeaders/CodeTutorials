import {MigrationInterface, QueryRunner} from "typeorm";

export class categoryRelationVideos1581901238501 implements MigrationInterface {
    name = 'categoryRelationVideos1581901238501'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "videos_category_category" ("videosId" uuid NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_d103ad896e8a2bd9f406b1fed6e" PRIMARY KEY ("videosId", "categoryId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_68666f8a5ca56b014d4b4e5402" ON "videos_category_category" ("videosId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_039b08e7db66f6646683eae7b6" ON "videos_category_category" ("categoryId") `, undefined);
        await queryRunner.query(`ALTER TABLE "videos_category_category" ADD CONSTRAINT "FK_68666f8a5ca56b014d4b4e5402a" FOREIGN KEY ("videosId") REFERENCES "videos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "videos_category_category" ADD CONSTRAINT "FK_039b08e7db66f6646683eae7b61" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "videos_category_category" DROP CONSTRAINT "FK_039b08e7db66f6646683eae7b61"`, undefined);
        await queryRunner.query(`ALTER TABLE "videos_category_category" DROP CONSTRAINT "FK_68666f8a5ca56b014d4b4e5402a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_039b08e7db66f6646683eae7b6"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_68666f8a5ca56b014d4b4e5402"`, undefined);
        await queryRunner.query(`DROP TABLE "videos_category_category"`, undefined);
    }

}
