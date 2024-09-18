import { Body, Controller, Get, Param, Post, Request, Session } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './createMovie.dto';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('movie')
export class MovieController {
    constructor(private movieService: MovieService) {}

    @Get("random")
    GetRandom() {
        return this.movieService.getRandomMovie();
    }

    @Get("genre/:id")
    GetByGenre(@Param("id") id: string) {
        return this.movieService.getByGenre(id);
    }

    @Get("all-genres")
    GetAllGenres() {
        return this.movieService.getAllGenre();
    }

    @Post("save")
    @FormDataRequest()
    SaveMovie(@Body() createMovieDto: CreateMovieDto, @Session() session) {
        console.log(session);
        return this.movieService.saveMovie(createMovieDto.id);
    }
}
