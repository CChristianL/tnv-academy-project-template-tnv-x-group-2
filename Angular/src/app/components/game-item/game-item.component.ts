import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { ViewEncapsulation } from '@angular/core'


@Component({
  encapsulation: ViewEncapsulation.None, //Santa lode a stackoverflow https://stackoverflow.com/questions/45788972/how-to-hide-ngb-carousel-indicators-and-prev-next-control
  //Se la correggiamo non vedo l'ora di toglierla
  selector: 'tnv-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {

   @Input() movie: Movie | undefined;
   @Input() movies: Movie [] = [];
   @Input() rating: Rating | undefined;
   @Input() ratings: Rating [] = [];
   
   @Output() submited = new EventEmitter<Rating>();
   @Output() skipped = new EventEmitter<number>();

   showText = true;

   ngOnInit(): void {
    console.log("Movies:", this.movies);
    console.log("Ratings:", this.ratings);
    // Implementa la logica del carosello e dei dati associati qui
  }
   onSubmited(rating : Rating) {
    this.submited.emit(rating);
    console.log("Sono qui - Game-item-component.ts");
   }

   onSkipped(id : number) {
    this.skipped.emit(id);
    console.log("Sono qui - Game-item-component.ts");
    console.log(id);
   }
   
   toggleVisibility(): void {
    this.showText = !this.showText;
  }
  
}
  

