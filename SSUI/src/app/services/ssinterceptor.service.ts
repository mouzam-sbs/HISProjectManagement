import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SSInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService,
    private router: Router,
    private local: LocalStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    if (this.authService.isAuthenticated) {
      const headers = new HttpHeaders().set("Authorization", "Bearer " + this.local.get("user").tokenJwt);
      const AuthRequest = req.clone({ headers: headers});
      return next.handle(AuthRequest)
    }
    else {
      return next.handle(req);
    }
  }

}
