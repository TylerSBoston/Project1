import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../employee/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceManagerGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    


          
      if(this.authService.loggedInPermissions.has(1))
      {
        return true;
      }
      else{
        return false;
      }
  }
  
}
