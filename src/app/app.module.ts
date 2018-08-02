import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMovieService }  from './in-memory-movie.service';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';
import { MoviesComponent }      from './movies/movies.component';
import { MessagesComponent }    from './messages/messages.component';
import { MovieAddComponent } from './movie-add/movie-add.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMovieService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessagesComponent,
    MovieAddComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
