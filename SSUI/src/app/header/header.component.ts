import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private local: LocalStorageService,private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    debugger;
    this.authService.logout().subscribe(res => {
      this.authService.isAuthenticated = false;
      debugger;
      this.local.remove("user");
      this.router.navigate(['login']);
    });
  }

}
