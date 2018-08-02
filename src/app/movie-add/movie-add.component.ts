import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
 flag : boolean;
 formError: boolean;
 dateError: boolean;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.flag=false;
    this.formError= false;
    this.dateError=false;
  }

  added():void{
   this.flag = true;
  }

  add(title: string, director: string, releaseDate: string): void {
    var newMovie = {
      title : title.trim(),
      director : director.trim(),
      releaseDate : releaseDate.trim(),
    };

    /* make sure all the fiels are filled */
    if ((!title) || (!director) || (!releaseDate)) {
      this.formError= true;
      this.dateError= false;
      return;
    }
    /* checking if the release date is correct format*/
    if (isNaN(Date.parse(releaseDate))) {
        this.dateError=true;
        this.formError= false;
        return;
    }

    this.formError= false;
    this.dateError=false;

    /* set the date to correct format month day, year */
     var rd = new Date(releaseDate.trim());
     var rd1 = rd.toDateString().split(" ").slice(1);
     rd1[1] = rd1[1]+',';
     newMovie.releaseDate = rd1.join(" ");
  
     this.movieService.addMovie( newMovie as Movie)

      .subscribe(movie => {
        this.added();
      });

  }

}
