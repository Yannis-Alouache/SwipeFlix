import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Movie } from './movie.schema';

export type userDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  moviesLiked: Movie[];
}

export const UserSchema = SchemaFactory.createForClass(User);
