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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fetch = require('node-fetch');
let MovieService = class MovieService {
    constructor(movieGenreModel) {
        this.movieGenreModel = movieGenreModel;
    }
    async getRandomMovie() {
        const pageNumber = Math.floor(Math.random() * 500) + 1;
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr&page=${pageNumber}&sort_by=popularity.desc`;
        const imageApiUrl = "https://image.tmdb.org/t/p/w500";
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODYxNDBjZWU0OGExZDc3ZWNkOWNlNDkxY2IyZGE0YyIsIm5iZiI6MTcyNDc0NDA5My40NzI1MTUsInN1YiI6IjY2Y2Q4MDkwMTM0NTVjZGRmYWM0MjI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9BBZDITAueyqVDGAPt7EX0ICSX_ZT7rJmkd8NJ8uaU',
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        const numberResultInThePage = data.results.length;
        const movieNumber = Math.floor(Math.random() * numberResultInThePage);
        const tmp = data.results[movieNumber].poster_path;
        data.results[movieNumber].poster_path = imageApiUrl + tmp;
        return data.results[movieNumber];
    }
    async getByGenre(id) {
        const pageNumber = Math.floor(Math.random() * 500) + 1;
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr&page=${pageNumber}&sort_by=popularity.desc&with_genres=${id}`;
        const imageApiUrl = "https://image.tmdb.org/t/p/w500";
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODYxNDBjZWU0OGExZDc3ZWNkOWNlNDkxY2IyZGE0YyIsIm5iZiI6MTcyNDc0NDA5My40NzI1MTUsInN1YiI6IjY2Y2Q4MDkwMTM0NTVjZGRmYWM0MjI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9BBZDITAueyqVDGAPt7EX0ICSX_ZT7rJmkd8NJ8uaU',
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        const numberResultInThePage = data.results.length;
        const movieNumber = Math.floor(Math.random() * numberResultInThePage);
        const tmp = data.results[movieNumber].poster_path;
        if (tmp === null)
            data.results[movieNumber].poster_path = "https://cringemdb.com/img/movie-poster-placeholder.png";
        else
            data.results[movieNumber].poster_path = imageApiUrl + tmp;
        return data.results[movieNumber];
    }
    async getAllGenre() {
        return this.movieGenreModel.find({});
    }
    async saveMovie(movieId) {
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('MovieGenre')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MovieService);
//# sourceMappingURL=movie.service.js.map