import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie }         from '../movie';
import { MovieService }  from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
@Input() movie: Movie;
formError: boolean;
dateError: boolean;

  constructor(private route: ActivatedRoute,
  private movieService: MovieService,
  private location: Location) {}

  ngOnInit(): void {
    this.formError= false;
    this.dateError=false;
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
   /* make sure all the fiels are filled */
   if ((!this.movie.title) || (!this.movie.director) || (!this.movie.releaseDate)) {
     this.formError= true;
     this.dateError= false;
     return;
   }
   /* checking if the release date is correct format*/
   if (isNaN(Date.parse(this.movie.releaseDate))) {
       this.dateError=true;
       this.formError= false;
       return;
   }

   this.formError= false;
   this.dateError=false;

   /* set the date to correct format month day, year */
    var rd = new Date(this.movie.releaseDate.trim());
    var rd1 = rd.toDateString().split(" ").slice(1);
    rd1[1] = rd1[1]+',';
    this.movie.releaseDate = rd1.join(" ");

    this.movieService.updateMovie(this.movie)
      .subscribe(() => this.getMovie());
  }

}
