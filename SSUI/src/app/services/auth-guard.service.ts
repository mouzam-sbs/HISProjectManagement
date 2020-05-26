import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router,
    private local: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if (!this.authService.isAuthenticated) {
      this.router.navigate(['./login']);
      return false;
    }
    else if (route.data.hasRole && route.data.hasRole !== this.local.get('user').role) {
      this.router.navigate(['./accessdenied']);
      return false;
    }
    return true;
  }

}
