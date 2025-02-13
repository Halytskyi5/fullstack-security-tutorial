import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Credentials} from './models/credentials';
import {User} from './models/user';
import {SignUp} from './models/signup';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
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
  login(user : Credentials) : Observable<User>{
    return this.http.post<User>(`${this.url}/login`, user, {headers : this.getHeaders()});
  }

  register(signUpDto : SignUp) : Observable<User>{
    return this.http.post<User>(`${this.url}/register`, signUpDto, {headers : this.getHeaders()});
  }




}
