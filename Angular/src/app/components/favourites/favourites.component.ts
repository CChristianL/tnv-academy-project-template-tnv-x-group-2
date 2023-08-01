import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'tnv-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})

export class FavouritesComponent {
  @Input() movies: Movie[] = [];
  @Input() ratings: Rating[] = [];

  filteredMovies: Movie[] = [];
  filteredRatings: Rating[] = [];
  recoveredUser: any;

  constructor(public movieService: MovieService, public ratingService: RatingService) { }

  ngOnChanges(): void {
    this.updateFilteredRating();
    this.updateFilteredMovie();
  }

  recoverLocalUser() {
    if (!localStorage.getItem('user')) {
      this.recoveredUser = {} as any;
    } else {
      const userString = localStorage.getItem('user');
      this.recoveredUser = JSON.parse(userString || '{}') as any;
    }
  }

  updateFilteredMovie() {
    this.filteredMovies = [...this.movies];
    this.filteredMovies = this.filteredMovies.filter((movie) => this.hasFilmCommented(movie.id));
    this.filteredMovies = this.filteredMovies.filter((movie) => this.hasFilmTeam(movie.id));
  }

  hasFilmCommented(movieId: number): boolean {
    return this.ratings.some((rating) => rating.movieId === movieId);
  }

  hasFilmTeam(movieId: number): boolean {
    return this.filteredRatings.some(rating => rating.movieId === movieId)
  }

  updateFilteredRating() {
    this.filteredRatings = [...this.ratings];
    this.filteredRatings = this.filteredRatings.filter((rating) => this.hasFilmRating(rating.movieId)) 
    this.recoverLocalUser();
    this.filteredRatings = this.filteredRatings.filter(rating => rating.team === this.recoveredUser.team)
  }

  hasFilmRating(RatingId: any): boolean {
    return this.movies.some((movie) => movie.id === RatingId);
  }

}
