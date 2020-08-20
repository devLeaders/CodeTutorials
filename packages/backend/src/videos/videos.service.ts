import {Injectable} from '@nestjs/common';
import {Repository, getRepository} from 'typeorm';
import VideosEntity from './videos.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {ShortVersionDTO, FilterVideoDTO} from './videos.dto';
import CategoryEntity from './category.entity';
import * as fs from 'fs';

const shortVersion = Object.keys(new ShortVersionDTO()) as any;

@Injectable()
export class VideosService {
	constructor(@InjectRepository(VideosEntity) private videosRepository:Repository<VideosEntity>,
		@InjectRepository(CategoryEntity) private categoriesRepository:Repository<CategoryEntity>,
	)
	{}

	async getAll(param:FilterVideoDTO) {
		const page = (param.page) ? param.page : 1;
		let query = getRepository(VideosEntity)
			.createQueryBuilder("videos")
			.leftJoinAndSelect("videos.category", "category")
			.take(20)
			.skip(20 * (page - 1))
			.where(`videos.id IS NOT NULL`);
		if (param.title) {
			query = query.andWhere(`videos.title LIKE :title`, {title: param.title});
		}
		if (param.category) {
			query = query.andWhere(`category.id IN (:...ids)`, {ids: param.category});
		}

		const videos = query.getMany();
		return videos;
	}

	async getAllCategoryList() {
		return await getRepository(CategoryEntity)
			.createQueryBuilder("category")
			.leftJoinAndSelect("category.videos", "videos")
			.getMany();
	}

	async getStream(id:string, res:any, req:any) {
		const video = await this.getSingleVideo(id);
		const path = 'uploads/video/p720-angular-cli-dla-programistow-java-angular-w-45-min.mp4';
		const stat = fs.statSync(path);
		const range = req.headers.range;
		const fileSize = stat.size;
		try {
			if (range) {
				const parts = range.replace(/bytes=/, '').split('-');
				const start = parseInt(parts[0], 10);
				const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
				const chunksize = end - start + 1;
				const VideoReadStream = fs.createReadStream(path, {start, end});
				const head = {
					'Content-Range': `bytes ${start}-${end}/${fileSize}`,
					'Accept-Ranges': 'bytes',
					'Content-Length': chunksize,
					'Content-Type': 'video/mp4',
				};
				res.writeHead(206, head);
				VideoReadStream.pipe(res);
			}
			else {
				const head = {
					'Content-length': fileSize,
					'Content-Type': 'video/mp4',
				};
				res.writeHead(200, head);
				fs.createReadStream(path).pipe(res);
			}
		} catch (err) {
			return err;
		}
	}

	async getSingleVideo(id:string):Promise<VideosEntity> {
		return await this.videosRepository.findOne(id);
	}

	async addNewVideoFromFiles():Promise<void> {
		if (!fs.existsSync("uploads") || !fs.existsSync("uploads/video"))
			return;

		const files = fs.readdirSync("uploads/video").filter(file => file.endsWith(".mp4"));

		if (!files.length)
			return;

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			let video = new VideosEntity();
			const statFile = fs.statSync(file);
			video.title = file.substring(0, file.lastIndexOf("."));
			video.urlVideo = file;
			video.urlTrailer = file;
			video.urlPhoto = file.replace(".mp4", ".jpeg");
			video.dateCreation = statFile.birthtime.toLocaleDateString().replace(".", "-").replace(".", "-");
			video.duration = await VideosService.getDurationFromFiles(`uploads/video/${file}`);

			this.videosRepository.save(video);
		}
	}

	private static async getDurationFromFiles(path:string):Promise<number> {
		const fs = require("fs").promises;

		const buff = Buffer.alloc(100);
		const header = Buffer.from("mvhd");

		const file = await fs.open(path, "r");
		const {buffer} = await file.read(buff, 0, 100, 0);

		await file.close();

		const start = buffer.indexOf(header) + 17;
		const timeScale = buffer.readUInt32BE(start);
		const duration = buffer.readUInt32BE(start + 4);

		return Math.floor((duration / timeScale) * 1000);

	}


}