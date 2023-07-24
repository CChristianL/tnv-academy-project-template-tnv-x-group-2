import { Component, Input } from '@angular/core';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-game-comment-rating',
  templateUrl: './game-comment-rating.component.html',
  styleUrls: ['./game-comment-rating.component.scss']
})
export class GameCommentRatingComponent {

@Input() ratings: Rating [] = [];
@Input() rating: Rating | undefined;

}
