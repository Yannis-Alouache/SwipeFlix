import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieGenreSchema } from 'src/schemas/movieGenre.schema';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { MovieSchema } from 'src/schemas/movie.schema';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [
    MongooseModule.forFeature([{ name: 'MovieGenre', schema: MovieGenreSchema }]),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }]),
    NestjsFormDataModule,
  ]
})
export class MovieModule {}
