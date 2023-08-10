import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'tnv-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Input() ratings: Rating[] = [];
  rating: Rating = {}

  filteredMovies: Movie[] = [];
  recoveredUser: any;

  constructor(public movieService: MovieService, public ratingService: RatingService) { }

  ngOnInit(): void {
    this.updateFilteredMovies();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movies'] || changes['ratings']) {
      this.updateFilteredMovies();
    }
  }

  onRatingSubmited(rating: Rating) {
    //this.ratingService.createRating(rating).subscribe({
      //next: (newRating) => {
        //this.ratings.push(newRating);
        this.ratingService.createRating(rating);
        this.movies = this.movies.filter(movie => movie.id !== rating.movieId); // Rimuove il film votato dall'array movies
        this.updateFilteredMovies(); // Aggiorna l'array filteredMovies dopo ogni rating
      //},
      //error: (error) => {
        //console.log('Errore nel salvataggio del rating:', error);
      }
    //});
  //}

  onMovieSkipped(id: number) {
    this.movies = this.movies.filter(x => x.id !== id);
    this.updateFilteredMovies();
  }

  updateFilteredMovies() {

    // Recupera l'utente corrente. Dubbio: avremmo dovuto inietare il service per usare
    // la vostra funzione in auth.service?
    this.recoverLocalUser();
    console.log(this.recoveredUser)

    // Spread Operator per decostruire e costruiremo filteredMovies
    this.filteredMovies = [...this.movies];

    // Filtra i film che non hanno un rating
    this.filteredMovies = this.filteredMovies.filter((movie) => !this.hasUserCommentedMovie(movie.id));

    // Shuffle dei film in arrivo dalla chiamata
    this.filteredMovies = this.shuffleArray(this.filteredMovies);

    console.log("Filtered Movies:", this.filteredMovies);
  }

  shuffleArray(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  recoverLocalUser() {
    if (!localStorage.getItem('user')) {
      this.recoveredUser = {} as any;
    } else {
      const userString = localStorage.getItem('user');
      this.recoveredUser = JSON.parse(userString || '{}') as any;
    }
  }

  hasUserCommentedMovie(movieId: number): boolean {
    return this.ratings.some((rating) => rating.movieId === movieId && rating.userId === this.recoveredUser.id);
  }

}