import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, map, of } from "rxjs";
import { DistributionDTO, LoginDTO, RegisterDTO, UpdateDTO, User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  springBootUrl = 'http://localhost:8080/users';

  constructor(private router: Router, private http: HttpClient) {}

  login(loginData: LoginDTO) {
    console.log('auth service.ts', loginData);
    this.router.navigateByUrl("/login");  
 
    return this.http.post<LoginDTO>(`${this.springBootUrl}/login`, loginData);
    /*
    const user: User = {
          name: 'Paolino',
          surname: 'Paperino',
          username: 'papero123'
    }

    // Passare username e password
    // return this.http.get(`${this.springBootUrl}/api/user`);
    // Stub prima di implementare l'API

    //return of(user);
    // Fine stub
    */
}

  register(registerData: RegisterDTO) {
   return this.http.post<RegisterDTO>(`${this.springBootUrl}/register`, registerData);
  }
  //this.router.navigateByUrl("/register");
  // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
   //this.router.navigateByUrl("/");

  update(updateData: UpdateDTO) {
    const user = JSON.parse(localStorage.getItem("user") || '') as User;
    return this.http.put<UpdateDTO>(`${this.springBootUrl}/${user.id}`, updateData);
  }


  logout() {
    localStorage.removeItem("user");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user") || '') as User;
    return user;
  }

  getDistribution() {
    return this.http.get<DistributionDTO>(`${this.springBootUrl}/distribution/team/members`);
  }
 
}
