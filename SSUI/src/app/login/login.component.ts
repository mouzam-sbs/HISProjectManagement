import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Loginvm } from '../models/loginvm';
import { LocalStorageService } from 'angular-web-storage';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT)private document: Document, private local:LocalStorageService, private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  userLoginForm: FormGroup
  showSuccessMsg: boolean;
  ngOnInit() {
    this.userLoginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get userName() {
    return this.userLoginForm.get('userName');
  }
  get password() {
    return this.userLoginForm.get('password');
  }

  serverErrors = [];
  showFailureMsg: boolean = false;
  login() {
    var loginuser: Loginvm = new Loginvm(this.userName.value, this.password.value);
    this.authService.login(loginuser).subscribe(res => {
      this.authService.isAuthenticated = true;
      this.local.set("user", res);
      this.router.navigate(['./home']);
    }, err => {
        this.serverErrors = [];
        if (err.status === 400) {
          Object.keys(err.error).forEach(key => {
            this.serverErrors.push(err.error[key]["key"]);
          });
        }
        else if (err.status === 500) {
          console.log(err);
          this.serverErrors.push(err.error);
        }
        this.showFailureMsg = true;
        this.showSuccessMsg = false;
      });
  }

 gmailLogin() {
    this.document.location.href = 'http://Localhost:7000/api/Account/signInWithGoogle';
  }

}
