import { Component, Directive } from '@angular/core';
import { PunteggioComponent } from './punteggio/punteggio.component';
import { Component, Input, SimpleChanges } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Rating } from 'src/app/models/rating';


@Component({
  selector: 'tnv-contatore-scudo',
  templateUrl: './contatore-scudo.component.html',
  styleUrls: ['./contatore-scudo.component.scss']
})
export class ContatoreScudoComponent {


//@Directive({ selector: '[punteggio]'})
//class punteggioDirective {
//  constructor(public PunteggioComponent: PunteggioComponent) {
//    PunteggioComponent.getPunteggio_fazione();
//  }
//}




/*
rCounter: number = 0;
bCounter: number = 0;

onClickB () {
  this.bCounter++;
  //localStorage.setItem("Contatore Punti", JSON.stringify(this.counter)); //DA FIXARE TUTTO BETA
}

onClickR () {
  this.rCounter++;
  //localStorage.setItem("Contatore Punti", JSON.stringify(this.counter)); //DA FIXARE TUTTO BETA
}

ngOnInit () {
  this.rCounter;
  this.bCounter;
}

=======
  @Input() ratings: Rating [] = [];
  counter: number = 0;
  
  constructor(public ratingService: RatingService) {
      
  }
  ngOnChanges (): void {
  }

  updateCounter(ratings: Rating[]) {
    this.counter = ratings.length;
  }

*/
}
