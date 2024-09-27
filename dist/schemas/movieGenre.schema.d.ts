import { HydratedDocument } from 'mongoose';
export type movieGenreDocument = HydratedDocument<MovieGenre>;
export declare class MovieGenre {
    _id: string;
    name: string;
}
export declare const MovieGenreSchema: import("mongoose").Schema<MovieGenre, import("mongoose").Model<MovieGenre, any, any, any, import("mongoose").Document<unknown, any, MovieGenre> & MovieGenre & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MovieGenre, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MovieGenre>> & import("mongoose").FlatRecord<MovieGenre> & Required<{
    _id: string;
}>>;
