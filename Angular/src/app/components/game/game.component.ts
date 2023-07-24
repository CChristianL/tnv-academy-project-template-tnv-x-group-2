import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';


@Component({
  selector: 'tnv-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  movies: Movie [] = [];
  ratings: Rating [] = [];

  constructor (private http: HttpClient) {

  }

  ngOnInit(): void{

  this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?api_key=1dbbbb1e7496ae12052380ca2ebe5ae2`)
  .subscribe({
    next: (response) => {this.movies = response.results;
    console.log(this.movies);
    console.log("Ho eseguito la chiamata test")
  },
  error: (error) => console.log('Ho sbagliato!', error)
  })

}
}
