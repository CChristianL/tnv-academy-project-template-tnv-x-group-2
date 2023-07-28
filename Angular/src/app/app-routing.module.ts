import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./@core/helpers/auth-guard";
import { LoginComponent } from "./@shared/components/login/login.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { RegisterComponent } from "./@shared/components/register/register.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RankingsComponent } from "./components/rankings/rankings.component";
import { LandingPageComponent } from "./@shared/components/landing-page/landing-page.component";
import { GameComponent } from "./components/game/game.component";
import { PageRatingsmoviesComponent } from "./components/page-ratingsmovies/page-ratingsmovies.component";
import { FavouritesItemComponent } from "./components/favourites-item/favourites-item.component";
import { FavouritesComponent } from "./components/favourites/favourites.component";
import { PageCommentComponent } from "./components/page-comment/page-comment.component";

const routes: Routes = [
  
  {
    path: "",
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "game", component: PageRatingsmoviesComponent},
      { path: "combatti", component: WelcomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "rankings", component: PageCommentComponent },
      { path: "", redirectTo: "combatti", pathMatch: 'full' },
      
    ],
  },

  {
  path: "landing-page",
  component: LandingPageComponent, 
  },

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
