import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertYoutubeId1601564103815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'VgACeGCW2Qk' WHERE id = 1;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'qNvT99L5Uc4' WHERE id = 2;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'LT6VZp52e-A' WHERE id = 3;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'Ju1Y5cpFKuM' WHERE id = 4;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'd9qdXn6d3EY' WHERE id = 5;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'Mb71AOKmqoU' WHERE id = 6;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'OW3w66GjWfA' WHERE id = 7;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'xGBqqBlbiAI' WHERE id = 8;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'yxuYrNKt61A' WHERE id = 9;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = '_V16I5TPlSE' WHERE id = 10;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'vI-J4e2axKM' WHERE id = 11;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'r14ifzQJyYQ' WHERE id = 12;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'gFevma4a_qQ' WHERE id = 13;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = '_ejzOalFNos' WHERE id = 14;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'FZ4fnxPPuDc' WHERE id = 15;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'm7J-7ka8neU' WHERE id = 16;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'XZvtyn8zFSQ' WHERE id = 17;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'kylW8wm7wMY' WHERE id = 18;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'nQ7AXqXNqQY' WHERE id = 19;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'ngO91Up1Zuc' WHERE id = 20;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'ywtFuXYFxo4' WHERE id = 21;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'wG11hlMuBzU' WHERE id = 22;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'H8gCKTBQASQ' WHERE id = 23;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'b9dPc_rhBxE' WHERE id = 24;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'MHqqZOSM9cU' WHERE id = 25;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = '_jBroLn6LKQ' WHERE id = 26;`)
        await queryRunner.query(`UPDATE videos SET "idYoutube" = 'izLhdM_Tmg0' WHERE id = 27;`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
