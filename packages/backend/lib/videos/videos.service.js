"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const videos_entity_1 = require("./videos.entity");
const typeorm_2 = require("@nestjs/typeorm");
const videos_dto_1 = require("./videos.dto");
const category_entity_1 = require("./category.entity");
const shortVersion = Object.keys(new videos_dto_1.ShortVersionDTO());
let VideosService = class VideosService {
    constructor(videosRepository, categoriesRepository) {
        this.videosRepository = videosRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getAll() {
        return await this.videosRepository.find({ select: shortVersion, relations: ["category"] });
    }
    async getAllCategoryList() {
        return await typeorm_1.getRepository(category_entity_1.default)
            .createQueryBuilder("category")
            .leftJoinAndSelect("category.videos", "videos")
            .getMany();
    }
};
VideosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(videos_entity_1.default)),
    __param(1, typeorm_2.InjectRepository(category_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], VideosService);
exports.VideosService = VideosService;
//# sourceMappingURL=videos.service.js.map