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

  @Input() ratings: Rating[] = [];

  counterSparta: Number = 0
  counterAtene: Number = 0

  posts: any;
  subscription !: Subscription;

  constructor(public ratingService: RatingService) {

  }
  //Questo oninit ripete la chiamata al DB facendo si che i punteggi si aggiornino.
  //Abbiamo tentato diversi approci per onChanges, fallendo, vorremo una delucidazione.

  ngOnInit() {
    this.subscription = timer(0, 1000).pipe(
      switchMap(async () => this.ratingService.teamAteneRating())
    ).subscribe(result => result);
    this.subscription = timer(0, 1000).pipe(
      switchMap(async () => this.ratingService.teamSpartaRating())
    ).subscribe(result => result);
  }

}

