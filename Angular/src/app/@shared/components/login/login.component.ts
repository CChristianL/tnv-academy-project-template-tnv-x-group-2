import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/@core/services/auth.service";

@Component({
  selector: "tnv-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }
/*
  login(form: NgForm) {
    console.log("login component.ts", form.value);
    form.control.markAllAsTouched();
    if (form.valid) {
      this.authService.login(form.value).subscribe({
        next: (response) => {
          
          localStorage.setItem("user", JSON.stringify(response));
          this.router.navigateByUrl("/rankings");
      },
        //error: () => alert("Login Errrato"),
        error: (err) => alert("Login Errato");
        }
      });
    }
  } */

  login(form: NgForm) {
    console.log("login component.ts", form.value);
    form.control.markAllAsTouched();
    if (form.valid) {
      this.authService.login(form.value).subscribe({
        next: (response) => {
          if (response) {
            console.log("Server response:", response);
            localStorage.setItem("user", JSON.stringify(response));
            this.router.navigateByUrl("/rankings");
          } else {
            alert("Login Errato");
          }
        },
        error: (err) => {
          console.error("Error:", err);
          alert("Errore nella richiesta al server"); //questo risulta comunque fare una 200, si tratta di un workaround dato che dovrebbe restituire una 401.
        }
      });
    }
  }
  
}