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
  squadraSparta : String = "Sparta";
  squadraAtene : String = "Atene";

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

  createRating(rating: Rating): Observable<Rating> {
    return  this.httpClient.post<Rating>(`${this.API_ROOT}/rating`, rating)
  }

  editRating(rating: Rating) {
     const userIdNumber = rating.userId!;
     const movieIdNumber = rating.movieId!;
     // Conversioni esplicite che Michele ha suggerito durante il tutoraggio integrativo.
    return this.httpClient.patch<Rating>(`${this.API_ROOT}/rating/${rating.id}`, rating)
      .pipe(switchMap(() => this.getRating(userIdNumber, movieIdNumber)));
  }

  deleteRating(id: number) {
    return this.httpClient.delete(`${this.API_ROOT}/rating/${id}`);
  }

  teamAteneRating (){
    return this.httpClient.get<any>(`${this.API_ROOT}/ratings`).subscribe({
      next: (response) => {this.counterAtene = response.filter((response: { team: String; }) =>
         response.team === this.squadraAtene).length;
        }
      })
    }
    teamSpartaRating (){
      return this.httpClient.get<any>(`${this.API_ROOT}/ratings`).subscribe({
        next: (response) => {this.counterSparta = response.filter((response: { team: String; }) =>
           response.team === this.squadraSparta).length;
          }
        })
      }
  
}