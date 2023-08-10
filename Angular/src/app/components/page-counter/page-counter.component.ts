import { Component } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';

@Component({
  selector: 'tnv-page-counter',
  templateUrl: './page-counter.component.html',
  styleUrls: ['./page-counter.component.scss']
})
export class PageCounterComponent {

  constructor (public ratingsService: RatingService){
      this.ratingsService.getRatings();
  }

  ngOnChanges () {
  }

}
