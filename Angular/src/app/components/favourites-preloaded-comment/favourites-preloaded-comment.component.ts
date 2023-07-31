import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-favourites-preloaded-comment',
  templateUrl: './favourites-preloaded-comment.component.html',
  styleUrls: ['./favourites-preloaded-comment.component.scss']
})
export class FavouritesPreloadedCommentComponent {
  
  @Input() ratings: Rating [] = [];
  @Input() rating: Rating | undefined;
  @Input() movies: Movie [] = [];
  @Input() movie: Movie | undefined;


  arrayMovieCommented: Movie [] = [];
  arrayComment: Rating [] = [];
  

  constructor(){
   
  }

  
 
   
 

}



