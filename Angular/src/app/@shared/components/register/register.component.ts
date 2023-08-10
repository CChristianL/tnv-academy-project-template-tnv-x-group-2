import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/@core/services/auth.service";
import { DistributionDTO, RegisterDTO } from "src/app/models/user";

@Component({
  selector: "tnv-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})

export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

//cities = ['Atene', 'Sparta'];
  bEnabled = false;
  rEnabled = false;

  ngOnInit(): void {
    this.getTeam();

    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }

  getTeam() {
    this.authService.getDistribution().subscribe({
      next: (response) => {
        this.bEnabled = response.bEnabled;
        this.rEnabled = response.rEnabled;
      },
      error: () => alert("Errato"),
    })
  };

  register(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.valid) {
      this.authService.register(form.value).subscribe({
        next: (response) => {
          alert("Registrazione avvenuta con successo.");
          this.router.navigateByUrl("/login");
        },
        error: (err) => alert("Registrazione Fallita: Utente già registrato"),
      });
    }
  }
}


