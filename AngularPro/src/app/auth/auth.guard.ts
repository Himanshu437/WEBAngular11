import { UserService } from './../shared/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

 // @Injectable({
 // providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {


 // constructor(private router: Router, private service: UserService) {
  //}
  /*
  canActivate(
    next: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): boolean {
  
    if (localStorage.getItem('token') != null) {
      let roles = ['Admin'];
      if (roles) {
      //  if (this.service.isAdmin(roles)) return true;
        else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
    }
    else {
      this.router.navigate(['/user/login']);
    }
   
  }}
  */
