import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie [] = [];

  API_ROOT = "https://api.themoviedb.org/3/movie/now_playing?language=it-it&api_key=1dbbbb1e7496ae12052380ca2ebe5ae2";

  constructor(private http: HttpClient) { 
    this.getMovies();
  }

  getMovies(){
      this.http.get<any>(`${this.API_ROOT}`).subscribe({
      next: (response) => {this.movies = response.results}
      })
    };
  }





