import { Movie } from 'src/schemas/movie.schema';

export interface IUser extends Document {
  readonly email: string;
  password: string;
  readonly moviesLiked: Movie[];
}
