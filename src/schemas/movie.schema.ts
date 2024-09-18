import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type movieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  imdbScore: string;

  @Prop()
  synopsis: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
