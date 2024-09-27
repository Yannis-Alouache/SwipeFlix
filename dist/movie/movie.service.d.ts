import { Model } from 'mongoose';
import { MovieGenre } from 'src/schemas/movieGenre.schema';
export declare class MovieService {
    private movieGenreModel;
    constructor(movieGenreModel: Model<MovieGenre>);
    getRandomMovie(): Promise<any>;
    getByGenre(id: string): Promise<any>;
    getAllGenre(): Promise<(import("mongoose").Document<unknown, {}, MovieGenre> & MovieGenre & Required<{
        _id: string;
    }>)[]>;
    saveMovie(movieId: string): Promise<void>;
}
