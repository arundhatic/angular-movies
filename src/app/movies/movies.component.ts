import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

   ngOnInit() {
     this.getMovies();
  }

   getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }


  add(title: string, director: string, releaseDate: string): void {
    var newMovie = {
      title : title.trim(),
      director : director.trim(),
      releaseDate : releaseDate.trim(),
    };

    /* make sure all the fiels are filled */
    if ((!title) || (!director) || (!releaseDate)) { return; }
    /* checking if the release date is correct format*/
    if ((!title) || (!director) || (!releaseDate)) { return; }

    this.movieService.addMovie( newMovie  as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }


}
