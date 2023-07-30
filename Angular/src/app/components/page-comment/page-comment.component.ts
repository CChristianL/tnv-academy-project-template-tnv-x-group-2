import { Component } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'tnv-page-comment',
  templateUrl: './page-comment.component.html',
  styleUrls: ['./page-comment.component.scss']
})
export class PageCommentComponent {
  constructor(public movieService: MovieService, public ratingService : RatingService){

  }

}
