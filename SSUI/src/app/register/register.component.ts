import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Ssuser } from '../models/ssuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  userRegistrationForm: FormGroup;
  ngOnInit() {
    this.userRegistrationForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      dob: ['', [Validators.required]]
    });
  }

  get urf() {
    return this.userRegistrationForm.controls;
  }

 get userName() {
    return this.userRegistrationForm.get('userName');
  }
  get email() {
    return this.userRegistrationForm.get('email');
  }
  get password() {
    return this.userRegistrationForm.get('password');
  }
  get confirmPassword() {
    return this.userRegistrationForm.get('confirmPassword');
  }
  get dob() {
    return this.userRegistrationForm.get('dob');
  }

  user = {};
formData = new FormData();
  upload(files: FileList) {
    this.formData.append(files.item(0).name, files.item(0));
  }
serverErrors = [];
  showFailureMsg: boolean = false;
register() {
    this.user = this.userRegistrationForm.value;
    this.formData.append('myModel', JSON.stringify(this.user));

    this.authService.register(this.formData).subscribe(res => {
      this.router.navigate(['./login']);
    }, err => {
        this.formData.delete("myModel");
      this.serverErrors = [];
        if (err.status === 400) {
          console.log(err);
          Object.keys(err.error).forEach(Key => {
          this.serverErrors.push(err.error[Key]["key"]);
        });
      }
      else if (err.status === 500) {
        console.log(err);
        this.serverErrors.push(err.error);
      }
      this.showFailureMsg = true;
    });
  }

  //register() {
  //  //var ssuser: Ssuser = new Ssuser();
  //  //ssuser.userName = this.userName.value;
  //  //ssuser.email = this.email.value;
  //  //ssuser.password = this.password.value;
  //  //ssuser.confirmPassword = this.password.value;
  //  //ssuser.dob = this.dob.value;
  //  var ssuser: Ssuser = new Ssuser(
  //    this.userName.value,
  //    this.email.value,
  //    this.password.value,
  //    this.confirmPassword.value,
  //    this.dob.value
  //  );
  //  this.authService.register(ssuser).subscribe(res => {
  //    alert('User Created Successfully');
  //    this.router.navigate(['./login']);
  //  });
  //}

}
