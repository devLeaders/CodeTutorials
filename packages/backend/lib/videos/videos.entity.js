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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
let VideosEntity = class VideosEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], VideosEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], VideosEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], VideosEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], VideosEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], VideosEntity.prototype, "dateCreation", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], VideosEntity.prototype, "country", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], VideosEntity.prototype, "language", void 0);
__decorate([
    typeorm_1.Column('integer'),
    __metadata("design:type", Number)
], VideosEntity.prototype, "duration", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], VideosEntity.prototype, "urlTrailer", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], VideosEntity.prototype, "urlVideo", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], VideosEntity.prototype, "urlPhoto", void 0);
__decorate([
    typeorm_1.ManyToMany(type => category_entity_1.default, {
        cascade: ["insert"]
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], VideosEntity.prototype, "category", void 0);
VideosEntity = __decorate([
    typeorm_1.Entity('videos')
], VideosEntity);
exports.default = VideosEntity;
//# sourceMappingURL=videos.entity.js.map