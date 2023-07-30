import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { ViewEncapsulation } from '@angular/core'
import { MovieService } from 'src/app/services/movie.service';
import { RatingService } from 'src/app/@shared/services/rating.service';

@Component({
  selector: 'tnv-favourites-item',
  templateUrl: './favourites-item.component.html',
  styleUrls: ['./favourites-item.component.scss']
})
export class FavouritesItemComponent {
  @Input() movie: Movie | undefined;
  @Input() movies: Movie [] = [];
  @Input() rating: Rating | undefined;
  @Input() ratings: Rating [] = [];
  mostraTesto = true;
  @Output() submited = new EventEmitter<Rating>();
  @Output() skipped = new EventEmitter<number>();

  showText = true;

  constructor (public movieService: MovieService, public ratingService:RatingService){}

   ngOnInit(): void {
    console.log("Movies:", this.movies);
    console.log("Ratings:", this.ratings);
    // Implementa la logica del carosello e dei dati associati qui
  }
   onSubmited(rating : Rating) {
    this.submited.emit(rating);
    console.log("Sono qui - Game-item-component.ts");
   }

   onSkipped(id : number) {
    this.skipped.emit(id);
    console.log("Sono qui - Game-item-component.ts");
    console.log(id);
   }
   
   toggleVisibility(): void {
    this.showText = !this.showText;
  }
  
}
  