import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMovieService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, title: 'Episode IV - A New Hope', director: 'George Lucas', releaseDate: 'May 25, 1977' },
      { id: 2, title: 'Episode V - The Empire Strikes Back', director: 'Irvin Kershner', releaseDate: 'May 21, 1980' },
      { id: 3, title: 'Episode VI - Return of the jedi', director: 'Richard Marquand', releaseDate: 'May 25, 1983'},
    ];
    return {movies};
  }
}
