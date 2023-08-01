import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';


@Component({

  selector: 'tnv-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {

  @Input() movie: Movie | undefined;
  @Input() movies: Movie[] = [];
  @Input() rating: Rating | undefined;
  @Input() ratings: Rating[] = [];

  @Output() submited = new EventEmitter<Rating>();
  @Output() skipped = new EventEmitter<number>();

  showText = true;

  ngOnInit(): void {

  }
  onSubmited(rating: Rating) {
    this.submited.emit(rating);
  }

  onSkipped(id: number) {
    this.skipped.emit(id);
  }

  toggleVisibility(): void {
    this.showText = !this.showText;
  }

}


