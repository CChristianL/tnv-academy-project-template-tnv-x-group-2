import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-favourites-item',
  templateUrl: './favourites-item.component.html',
  styleUrls: ['./favourites-item.component.scss']
})
export class FavouritesItemComponent {
  @Input() movie: Movie | undefined;
  @Input() movies: Movie[] = [];
  @Input() rating: Rating | undefined;
  @Input() ratings: Rating[] = [];

  recoveredUser: any;

  constructor() { }

  ngOnInit(): void {

  }

  recoverLocalUser() {
    if (!localStorage.getItem('user')) {
      this.recoveredUser = {} as any;
    } else {
      const userString = localStorage.getItem('user');
      this.recoveredUser = JSON.parse(userString || '{}') as any;
    }
  }

}
