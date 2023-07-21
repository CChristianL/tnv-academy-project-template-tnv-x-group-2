import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Partial<User> = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  update(form: NgForm) {
    console.log("update component.ts", form.value);
    form.control.markAllAsTouched();
    if (form.valid) {
      this.authService.update(form.value).subscribe({
        next: (response) => {
          //localStorage.setItem("user", JSON.stringify(response));
          
          localStorage.removeItem("user");
          alert("Update Riuscito, verrai riportato al login");
          this.router.navigateByUrl("/login");
      },
        error: () => alert("Update Fallito"),
        })
      };
    }

}
