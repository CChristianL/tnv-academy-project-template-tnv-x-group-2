import { Component, Input, SimpleChanges } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-contatore-scudo',
  templateUrl: './contatore-scudo.component.html',
  styleUrls: ['./contatore-scudo.component.scss']
})
export class ContatoreScudoComponent {

  @Input() ratings: Rating [] = [];
  counter: number = 0;
  
  constructor(public ratingService: RatingService) {
      
  }
  ngOnChanges (): void {
  }

  updateCounter(ratings: Rating[]) {
    this.counter = ratings.length;
  }
}
