import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private local: LocalStorageService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['tokenJwt']) {
        var obj = {
          "tokenJwt": params['tokenJwt'],
          "id":params['id'],
          "userName": params['userName'],
          "role": params['role']
        };
        this.local.set("user", obj);
        this.authService.isAuthenticated = true;
        this.router.navigate(['home']);
      }
    });
  }
}
