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
  @Input() movies: Movie [] = [];
  @Input() ratings: Rating [] = [];
  
  rating: Rating = {}

  counter: number = 0;

  filteredMovies: Movie[] = [];
  filteredRatings: Rating[] = [];
  recoveredUser: any;

  constructor(public movieService: MovieService, public ratingService: RatingService) {}

  
  ngOnChanges(): void {
    this.updateFilteredMovie();
    this.updateFilteredRating();
  }
  
 updateFilteredMovie (){
    this.filteredMovies = [...this.movies];
    this.filteredMovies = this.filteredMovies.filter((movie) => this.hasFilmCommented(movie.id));
 }
 hasFilmCommented (movieId : number) : boolean{
  return this.ratings.some((rating) => rating.movieId === movieId);
 }


 updateFilteredRating (){
  this.filteredRatings = [...this.ratings];
  //this.filteredRatings = this.filteredRatings.filter((rating) => this.hasFilmRating(rating.movieId)) //queste non stanno funzionando
  console.log(typeof(this.rating.movieId))
  console.log(this.filteredRatings)
  console.log(typeof(this.filteredRatings))
  console.log("array di commenti")
}
hasFilmRating (RatingId : number) : boolean{//queste non stanno funzionando
return this.movies.some((movie) => movie.id === RatingId);
}
}
