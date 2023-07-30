import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rating } from 'src/app/models/rating';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-game-comment-rating',
  templateUrl: './game-comment-rating.component.html',
  styleUrls: ['./game-comment-rating.component.scss']
})

export class GameCommentRatingComponent {

  constructor() {
  }

  @Input() ratings: Rating[] = [];
  @Input() rating: Rating = {};
  @Input() movies: Movie[] = [];
  @Input() movie: Movie | undefined;

  @Output() submit = new EventEmitter<Rating>();
  @Output() skipMovie = new EventEmitter<number>();

  //Blocco utilities
  wordLimit: number = 49;
  outOfBound = false;
  value: number = 0
  recoveredUser: any = {};
  commentTemp: string = '';

  //Bool pulsante
  submitButtonDisabled = true;

  onRatingChange(value: number | undefined) {
    if (value !== undefined) {
      this.rating.rating = value;
    }
    this.checkSubmitValidity();
  }

  //la regex come in c, se mettono più spazi consecutivi lo becchiamo senza drammi
  checkWordCount() {
    const wordCount = this.commentTemp.trim().split(/\s+/).length; 
    this.outOfBound = wordCount > this.wordLimit;
    this.checkSubmitValidity();
  }

  checkSubmitValidity() {
    const isRatingValid = this.rating.rating !== undefined;
    const isCommentValid = !this.outOfBound && this.commentTemp.trim().length > 0;
    this.submitButtonDisabled = !(isRatingValid && //se il Rating NON è valido, non abilita il pulsante
                                  isCommentValid && //se il Comment NON è valido, same
                                  this.movie); //se il Movie non è presente, l'operazione non è possibile
  }

  onSubmit() {
    console.log("Parto da qui - Game-comment-rating.component.ts")
    if (this.submitButtonDisabled) {
      console.log("Rating e/o commento non validi.");
      return;
    }

    this.recoverLocalUser(); //Recupero i dati da Local User, per inserirli nella copia del rating

    const ratingCopy: Rating = { //Ho creato una copia del rating perché mi pushava due oggetti
      rating: this.rating.rating,//Vorrei capire come mai, quindi lo cercherò.
      comment: this.commentTemp,
    
      userId: this.recoveredUser.id, //Non è stato usato ngForm per ottenere dati di tipo form
      movieId: this.movie?.id, //Poiché nel form non abbiamo questi 3 dati sotto this.commentTemp
      team: this.recoveredUser.team, //Potrebbe essere una soluzione lavorare il dato con doppio binding
      username: this.recoveredUser.username,
    };

    this.submit.emit(ratingCopy);
    
    this.clearRating();
  }

  onSkip() {
    console.log("Parto da qui per lo skip - GameCommentRatingComponent")
    this.skipMovie.emit(this.movie?.id);
    console.log(this.movie?.id);
  }

  recoverLocalUser() {
    if (!localStorage.getItem('user')) {
      this.recoveredUser = {} as any;
    } else {
      const userString = localStorage.getItem('user');
      this.recoveredUser = JSON.parse(userString || '{}') as any;
    }
  }

  clearRating(){
    console.log("Ho clearato il rating")
    this.rating.rating = undefined;  // Resetta il rating e il commento dopo l'invio
    this.commentTemp = ''; // Questo l'ho scritto come se fosse uno svuota buffer del rating
    this.checkSubmitValidity(); // Ricontrolla la validità del pulsante
  }
}
