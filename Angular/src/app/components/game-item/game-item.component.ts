import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None, //Santa lode a stackoverflow https://stackoverflow.com/questions/45788972/how-to-hide-ngb-carousel-indicators-and-prev-next-control
  selector: 'tnv-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {

   @Input() movie: Movie | undefined;
   @Input() movies: Movie [] = [];
   @Input() rating: Rating | undefined;
   @Input() ratings: Rating [] = [];
   mostraTesto = true;

   /*
   Allora, qui dobbiamo fare: un componente che spara il commento, lo emette. 
   Un metodo che controlli se il movie in questione è già stato commentato, incrociando il suo id con quello di movieId 
   dentro il model di rating e anche quello del user.id (idealmente salvato in memoria locale) e userId di rating.
   Lato template, se questo non è stato fatto, allora bisogna visualizzarlo, altrimenti non si visualizza.
   Ricordare che deve essere non solo commentato, ma anche rateato.
   Si può pensare di miniaturizzare il componente del box di testo, renderlo tipo game-item-comment.component
   Serve un metodo che quando salvi il commento, si assicuri che movieId del rating prenda il valore di movie.id.
   Bisogna implementare un metodo di controllo migliore per quanto riguarda il controllo. Poiché si deve considerare anche
   se l'utente ha commentato. Quindi se user.id corrente è uguale a userId dentro rating.
   */
   toggleVisibilita() {
    this.mostraTesto = !this.mostraTesto;
  }
  
  }

  



