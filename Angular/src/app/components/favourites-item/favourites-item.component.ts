import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { ViewEncapsulation } from '@angular/core'

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

  toggleVisibilita() {
    this.mostraTesto = !this.mostraTesto;
  }
  
}
