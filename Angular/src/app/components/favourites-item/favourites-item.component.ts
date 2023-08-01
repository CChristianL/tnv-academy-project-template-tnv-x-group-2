import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-favourites-item',
  templateUrl: './favourites-item.component.html',
  styleUrls: ['./favourites-item.component.scss']
})
export class FavouritesItemComponent {
  @Input() movie: Movie | undefined;
  @Input() movies: Movie[] = [];
  @Input() rating: Rating | undefined;
  @Input() ratings: Rating[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
