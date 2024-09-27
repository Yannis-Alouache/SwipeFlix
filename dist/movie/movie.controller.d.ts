import { MovieService } from './movie.service';
import { CreateMovieDto } from './createMovie.dto';
export declare class MovieController {
    private movieService;
    constructor(movieService: MovieService);
    GetRandom(): Promise<any>;
    GetByGenre(id: string): Promise<any>;
    GetAllGenres(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/movieGenre.schema").MovieGenre> & import("../schemas/movieGenre.schema").MovieGenre & Required<{
        _id: string;
    }>)[]>;
    SaveMovie(createMovieDto: CreateMovieDto, session: any): Promise<void>;
}
