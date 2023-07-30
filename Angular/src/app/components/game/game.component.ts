import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { MovieService } from 'src/app/services/movie.service';
import { ContatoreScudoComponent } from '../contatore-scudo/contatore-scudo.component';

@Component({
  selector: 'tnv-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() movies: Movie [] = [];
  @Input() ratings: Rating [] = [];
  rating: Rating = {}

  counter: number = 0;

  filteredMovies: Movie[] = [];
  recoveredUser: any;

  constructor(public movieService: MovieService, public ratingService: RatingService) {}

  ngOnInit(): void {
    
      console.log("Movies nel componente genitore:", this.movies);
      console.log("Ratings nel componente genitore:", this.ratings);
      this.updateFilteredMovies();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movies'] || changes['ratings']) {
      this.updateFilteredMovies();
      
    }
  }

  onRatingSubmited(rating: Rating) {
    this.ratingService.createRating(rating).subscribe({
      next: (newRating) => {
        this.ratings.push(newRating);
        this.counter++;
        console.log("Sono arrivato al penultimo step - Game.component.ts");
        console.log(this.ratings);
        this.movies = this.movies.filter(movie => movie.id !== rating.movieId); // Rimuovi il film votato dall'array movies
        this.updateFilteredMovies(); // Aggiorna l'array filteredMovies dopo ogni rating
        
      },
      error: (error) => {
        console.log('Errore nel salvataggio del rating:', error);
      }
    });
  }

  onMovieSkipped(id: number) {
    this.movies = this.movies.filter(x => x.id !== id);
    console.log("Sono arrivato al penultimo step - Game.component.ts");
    console.log(this.movies);
    this.updateFilteredMovies();
  }

  updateFilteredMovies() {
    
    // Recupera l'utente corrente
    this.recoverLocalUser();
    console.log(this.recoveredUser)
    
    // Copia locale dell'array movies
    this.filteredMovies = [...this.movies];

    // Filtra i film che non hanno un rating
    this.filteredMovies = this.filteredMovies.filter((movie) => !this.hasUserCommentedMovie(movie.id));

    console.log("Filtered Movies:", this.filteredMovies);
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

  hasUserSkippedMovie(movieId: number): boolean {
    return this.movies.some((movie) => movie.id === movieId);
  }
}