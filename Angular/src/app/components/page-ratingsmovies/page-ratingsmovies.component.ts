import { Component } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'tnv-page-ratingsmovies',
  templateUrl: './page-ratingsmovies.component.html',
  styleUrls: ['./page-ratingsmovies.component.scss']
})
export class PageRatingsmoviesComponent {

  constructor(public movieService: MovieService, public ratingService : RatingService){

  }

  ngOnChanges(){

  }

}
