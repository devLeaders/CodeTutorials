"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const videos_controller_1 = require("./videos.controller");
const videos_service_1 = require("./videos.service");
const typeorm_1 = require("@nestjs/typeorm");
const videos_repository_1 = require("./videos.repository");
let VideosModule = class VideosModule {
};
VideosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([videos_repository_1.VideosRepository])],
        controllers: [videos_controller_1.VideosController],
        providers: [videos_service_1.VideosService],
        exports: [typeorm_1.TypeOrmModule.forFeature([videos_repository_1.VideosRepository])]
    })
], VideosModule);
exports.VideosModule = VideosModule;
//# sourceMappingURL=videos.module.js.map