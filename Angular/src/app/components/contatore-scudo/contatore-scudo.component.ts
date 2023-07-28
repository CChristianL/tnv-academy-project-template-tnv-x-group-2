import { Component, Input } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-contatore-scudo',
  templateUrl: './contatore-scudo.component.html',
  styleUrls: ['./contatore-scudo.component.scss']
})
export class ContatoreScudoComponent {

  @Input() countedRatings: [] = [];
  counter: number = 0;
  
  constructor(public ratingService: RatingService) {
      
  }

  ngOnInit(): void {
    this.counter = this.countedRatings.length;
  }

  ngOnChanges (): void {
    this.counter = this.countedRatings.length
  }
}
