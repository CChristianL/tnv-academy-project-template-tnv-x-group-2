import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Rating } from 'src/app/models/rating';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  API_ROOT = 'http://localhost:1234/api';

  ratings: Rating[] = [];
  counterAtene: Number = 0;
  counterSparta: Number = 0;
  squadraSparta: String = "Sparta";
  squadraAtene: String = "Atene";

  constructor(private httpClient: HttpClient) {
    this.getRatings();
    this.teamAteneRating();
    this.teamSpartaRating();
  }


  getRatings() {
    this.httpClient.get<Rating[]>(`${this.API_ROOT}/ratings`).subscribe({
      next: (response) => this.ratings = response
    })
  }

  getRating(userId: number, movieId: number) {
    return this.httpClient.get<Rating>(`${this.API_ROOT}/rating/${userId}/${movieId}`);
  }

  createRating(rating: Rating) { //Metodo derivativo dal template
    //return 
    this.httpClient.post<Rating>(`${this.API_ROOT}/rating`, rating).subscribe({
      next: (rating) => {
        //this.ratings.push(rating);
        //this.ratings = [... this.ratings, rating];
        this.ratings.push(rating);
        this.ratings = [... this.ratings];
      },
      error: (error) => {
        console.log('Errore nel salvataggio del rating:', error);
      }
    });


  }

  editRating(rating: Rating) {
    const userIdNumber = rating.userId!;
    const movieIdNumber = rating.movieId!;
    // Conversioni esplicite suggerite durante il tutoraggio integrativo, non ancora integrate.
    return this.httpClient.patch<Rating>(`${this.API_ROOT}/rating/${rating.id}`, rating)
      .pipe(switchMap(() => this.getRating(userIdNumber, movieIdNumber)));
  }

  deleteRating(id: number) {
    return this.httpClient.delete(`${this.API_ROOT}/rating/${id}`);
  }

  teamAteneRating() {
    //return 
    this.httpClient.get<any>(`${this.API_ROOT}/ratings`).subscribe({
      next: (response) => {
        this.ratings = response;
        this.ratings = [...this.ratings];
        this.counterAtene = response.filter((response: { team: String; }) =>
          response.team === this.squadraAtene).length;
          console.log(this.counterAtene);
      }
    })
  }

  teamSpartaRating() {
    //return 
    this.httpClient.get<any>(`${this.API_ROOT}/ratings`).subscribe({
      next: (response) => {
        this.ratings = response;
        this.ratings = [...this.ratings];
        this.counterSparta = this.ratings.filter(rating => rating.team === this.squadraSparta).length;
        console.log(this.counterSparta)
      }})  
        
        //response.filter((response: { team: String; }) =>
          //response.team === this.squadraSparta).length;
          //console.log(this.counterSparta);
          
      }
    //})
  }
