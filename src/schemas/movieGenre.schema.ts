import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type movieGenreDocument = HydratedDocument<MovieGenre>;

@Schema()
export class MovieGenre {
  @Prop()
  _id: string;

  @Prop()
  name: string;
}

export const MovieGenreSchema = SchemaFactory.createForClass(MovieGenre);
