import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ssuser } from '../models/ssuser';
import { Loginvm } from '../models/loginvm';
import { LocalStorageService } from 'angular-web-storage';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl: string = "http://localhost:7000/api/Account";
  isAuthenticated: boolean=false;

  constructor(private local: LocalStorageService, private api: HttpClient) {
    if (this.local.get('user')) {
      this.isAuthenticated = true;
    }
    else {
      this.isAuthenticated = false;
    }
  }

  //register(ssuser: FormData) {
  //  return this.api.post<Ssuser>(this.baseUrl+"/register", ssuser);
  //}

  register(formData: FormData) {
    return this.api.post(this.baseUrl + "/register", formData);
  }

  login(loginUser: Loginvm) {
    return this.api.post<any>(this.baseUrl + "/login", loginUser);
  }

  logout() {
    return this.api.post<any>(this.baseUrl + "/logout", null);
  }

  getProfilePic() {
    debugger;
    return this.api.get(this.baseUrl + "/getProfilePic/", { responseType: "blob" });
  }
}
