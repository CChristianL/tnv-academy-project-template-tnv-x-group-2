import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {
[x: string]: any;
   @Input() movie: Movie | undefined;
   @Input() movies: Movie [] = [];
   @Input() rating: Rating | undefined;
}

