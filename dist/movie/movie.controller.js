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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const createMovie_dto_1 = require("./createMovie.dto");
const nestjs_form_data_1 = require("nestjs-form-data");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    GetRandom() {
        return this.movieService.getRandomMovie();
    }
    GetByGenre(id) {
        return this.movieService.getByGenre(id);
    }
    GetAllGenres() {
        return this.movieService.getAllGenre();
    }
    SaveMovie(createMovieDto, session) {
        console.log(session);
        return this.movieService.saveMovie(createMovieDto.id);
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Get)("random"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "GetRandom", null);
__decorate([
    (0, common_1.Get)("genre/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "GetByGenre", null);
__decorate([
    (0, common_1.Get)("all-genres"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "GetAllGenres", null);
__decorate([
    (0, common_1.Post)("save"),
    (0, nestjs_form_data_1.FormDataRequest)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createMovie_dto_1.CreateMovieDto, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "SaveMovie", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map