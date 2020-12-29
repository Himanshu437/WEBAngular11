import { UserService } from './../shared/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private service: UserService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null) {
      let roles = localStorage.getItem('role')
      if (roles == "Admin") {
        this.router.navigate(['/adminpanel']);
        return true;
      }
       // if (this.service.roleMatch(roles)) return true;
        else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      
     
    }
    else {
      this.router.navigate(['/user/login']);
      return false;
    }

  }
}
