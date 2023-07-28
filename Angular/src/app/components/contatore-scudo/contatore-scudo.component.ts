import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { RatingService } from 'src/app/@shared/services/rating.service';
import { Rating } from 'src/app/models/rating';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'tnv-contatore-scudo',
  templateUrl: './contatore-scudo.component.html',
  styleUrls: ['./contatore-scudo.component.scss']
})
export class ContatoreScudoComponent {

  @Input() ratings: Rating [] = [];
  //counter: number = 0;
  //arrayCounter: Rating [] = [];
  //counterSparta: Number = 0
  //counterAtene: Number = 0

  posts:any;
  subscription !: Subscription;

  constructor(public ratingService: RatingService) {
      
  }
  //questo oninit ripete la chiamata al DB facendo si che i punteggi si aggiornino
  //implementare con observable e onChanges?
  ngOnInit() {
    this.subscription = timer(0, 1000).pipe(
      switchMap(async () => this.ratingService.teamAteneRating())
    ).subscribe(result => 
      console.log("ho fatto la chiamata di aggiornamento atene")
    );
    this.subscription = timer(0, 1000).pipe(
      switchMap(async () => this.ratingService.teamSpartaRating())
    ).subscribe(result => 
      console.log("ho fatto la chiamata di aggiornamento sparta")
    );
}
  ngOnChanges (changes : SimpleChanges): void {    
      //this.updateCounter(this.ratings); //aggiorna ai cambiamenti
      //if (changes['ratings']) {
      //  this.updateCounter(changes['ratings'].currentValue);
      //}
  }

  //updateCounter(ratings: Rating[]) {
    //this.counter = ratings.length;
    //this.arrayCounter = this.ratings.filter(x => x.comment);//filtra in array counter per commenti
    //this.counter = this.arrayCounter.length //da a counter la grandezza dell'arrayCounter
  //}

  updateCounter (){
    
  }
}
