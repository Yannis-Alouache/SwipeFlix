export interface IMovie extends Document {
  readonly name: string;
  readonly imageUrl: string;
  readonly imdbScore: string;
  readonly synopsis: string;
}
