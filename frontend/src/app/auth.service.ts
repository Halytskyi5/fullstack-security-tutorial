import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CredentialsDto} from './dtos/credentialsDto';
import {UserDto} from './dtos/userDto';
import {SignupDto} from './dtos/signupDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8080";

  constructor(public http : HttpClient) { }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token : string | null) {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  isLoggedIn() : boolean {
    return this.getAuthToken() != null;
  }

  getHeaders() {
    let headers = {};
    if (this.getAuthToken() !== null) {
      headers = {"Authorization" : "Bearer " + this.getAuthToken()};
    }
    return headers;
  }

  getMessages() : Observable<any> {
    return this.http.get<any>(`${this.url}/messages`, {headers : this.getHeaders()});
  }
  login(user : CredentialsDto) : Observable<UserDto>{
    return this.http.post<UserDto>(`${this.url}/login`, user, {headers : this.getHeaders()});
  }

  register(signUpDto : SignupDto) : Observable<UserDto>{
    return this.http.post<UserDto>(`${this.url}/register`, signUpDto);
  }




}
