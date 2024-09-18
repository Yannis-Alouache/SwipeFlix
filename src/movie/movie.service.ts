import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from 'src/schemas/movie.schema';
import { MovieGenre } from 'src/schemas/movieGenre.schema';
const fetch = require('node-fetch');

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('MovieGenre') private movieGenreModel: Model<MovieGenre>,
    @InjectModel('Movie') private movieModel: Model<Movie>,
  ) {}

  async getRandomMovie() {
    // 500 pages
    const pageNumber = Math.floor(Math.random() * 500) + 1;

    const url =
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr&page=${pageNumber}&sort_by=popularity.desc`;
    const imageApiUrl = "https://image.tmdb.org/t/p/w500";
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODYxNDBjZWU0OGExZDc3ZWNkOWNlNDkxY2IyZGE0YyIsIm5iZiI6MTcyNDc0NDA5My40NzI1MTUsInN1YiI6IjY2Y2Q4MDkwMTM0NTVjZGRmYWM0MjI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9BBZDITAueyqVDGAPt7EX0ICSX_ZT7rJmkd8NJ8uaU',
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    const numberResultInThePage = data.results.length;
    const movieNumber = Math.floor(Math.random() * numberResultInThePage);

    const tmp = data.results[movieNumber].poster_path;
    data.results[movieNumber].poster_path = imageApiUrl + tmp;

    return data.results[movieNumber];
  }

  async getByGenre(id: string) {
    // 500 pages
    const pageNumber = Math.floor(Math.random() * 500) + 1;

    const url =
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr&page=${pageNumber}&sort_by=popularity.desc&with_genres=${id}`;
    const imageApiUrl = "https://image.tmdb.org/t/p/w500";
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODYxNDBjZWU0OGExZDc3ZWNkOWNlNDkxY2IyZGE0YyIsIm5iZiI6MTcyNDc0NDA5My40NzI1MTUsInN1YiI6IjY2Y2Q4MDkwMTM0NTVjZGRmYWM0MjI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9BBZDITAueyqVDGAPt7EX0ICSX_ZT7rJmkd8NJ8uaU',
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    const numberResultInThePage = data.results.length;
    const movieNumber = Math.floor(Math.random() * numberResultInThePage);

    const tmp = data.results[movieNumber].poster_path;
    if (tmp === null)
      data.results[movieNumber].poster_path = "https://cringemdb.com/img/movie-poster-placeholder.png";
    else
      data.results[movieNumber].poster_path = imageApiUrl + tmp;

    return data.results[movieNumber];
  }

  async getAllGenre() {
    return this.movieGenreModel.find({});
  }

  async saveMovie(movieId: string) {
    
  }
}
