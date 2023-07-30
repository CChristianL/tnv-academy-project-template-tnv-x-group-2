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

  
  /*
  ngOnInit(): void{
    
    //this.updateMovieCommented();
   
  }
  ngOnChanges(): void{
    //this.updateMovieCommented();
    
  }

  updateMovieCommented (){
    this.arrayComment = [...this.ratings];
    this.arrayComment = this.arrayComment.filter((rating) => this.hasFilmComment(rating.movieId)) 
    console.log(this.arrayComment)    
    console.log("array di commenti")
  }
  hasFilmComment ( movieId : any) : boolean{
    return this.movies.some((movie) => movie.id === movieId)
  }
  updateFilteredMovie (){
    this.arrayMovieCommented = [...this.movies];
    this.arrayMovieCommented = this.arrayMovieCommented.filter((movie) => this.hasFilmCommented(movie.id));
 }
 hasFilmCommented (movieId : number) : boolean{
  return this.ratings.some((rating) => rating.movieId === movieId);
 }
 */
}



