import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { inject } from "@angular/core";

export const UserGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log(route.params['id']);
  return inject(AuthService).getAuth() === route.params['id']
}