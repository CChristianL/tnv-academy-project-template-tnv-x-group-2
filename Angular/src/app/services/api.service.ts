import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ROOT = 'http://localhost:8080/users'; //http://localhost:3306/users
  //'http://localhost:3306/users' 

  //Cos'è questo service? Abbiamo usato auth.service.ts e qui non capisco cosa succeda

  activeUser: User | undefined | null;
  menu: User[] = [];
  
  constructor(private http: HttpClient) { 
    this.getUsers();
  }

  setActiveUser(id: number) {
    this.http.get<User>(`${this.API_ROOT}/users/${id}`)
      .subscribe({
        next: (response) => this.activeUser = response
      })
  }

  getUsers() {
    this.http.get<User[]>(`${this.API_ROOT}/`).subscribe({
      next: (response) => this.menu = response
    });
  }

  addUser(user: Partial<User>) {
    this.http.post<any>(`${this.API_ROOT}/piatti`, user).subscribe({
      next: (response) => this.menu = [...this.menu, response.data]
    });
  }

  editUser(user: Partial<User>) {
    return this.http.patch<any>(`${this.API_ROOT}/piatti/${user.id}`, user).subscribe({
      next: () => this.menu = this.menu.map(x => x.id === user.id ? user as User : x)
    });
  }

  deletePiatto(id: number) {
    return this.http.delete(`${this.API_ROOT}/piatti/${id}`).subscribe({
      next: () => this.menu = this.menu.filter(x => x.id !== id)
    });
  }
}
