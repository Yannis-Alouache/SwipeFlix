"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const common_1 = require("@nestjs/common");
const movie_controller_1 = require("./movie.controller");
const movie_service_1 = require("./movie.service");
const mongoose_1 = require("@nestjs/mongoose");
const movieGenre_schema_1 = require("../schemas/movieGenre.schema");
const nestjs_form_data_1 = require("nestjs-form-data");
let MovieModule = class MovieModule {
};
exports.MovieModule = MovieModule;
exports.MovieModule = MovieModule = __decorate([
    (0, common_1.Module)({
        controllers: [movie_controller_1.MovieController],
        providers: [movie_service_1.MovieService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'MovieGenre', schema: movieGenre_schema_1.MovieGenreSchema }]),
            nestjs_form_data_1.NestjsFormDataModule,
        ]
    })
], MovieModule);
//# sourceMappingURL=movie.module.js.map