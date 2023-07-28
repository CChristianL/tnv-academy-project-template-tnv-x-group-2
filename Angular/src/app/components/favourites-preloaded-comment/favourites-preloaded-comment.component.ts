import { Component, Input } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'tnv-favourites-preloaded-comment',
  templateUrl: './favourites-preloaded-comment.component.html',
  styleUrls: ['./favourites-preloaded-comment.component.scss']
})
export class FavouritesPreloadedCommentComponent {
  
  @Input() ratings: Rating [] = [];
  @Input() rating: Rating | undefined;
  @Input() movies: Movie [] = [];

  arrayMovieCommented: Movie [] = [];
  arrayComment: Rating [] = [];

  commentedMovie: Movie | undefined;
  comment: Rating |  undefined; 

  ngOnInit(): void{
  }

  getComment(){    
    
   }

}

