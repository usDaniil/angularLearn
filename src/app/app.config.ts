import { Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { UserComponent } from "./components/user/user.component";
import { ApplicationConfig } from "@angular/core";
import { UserGuard } from "./components/user/user.guard";
import { UserService } from "./components/user/user.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/:id', component: UserComponent, canActivate: [UserGuard], resolve: {user: UserService}},
  {path: '**', redirectTo: ''}
]

export const appConfig:ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
}