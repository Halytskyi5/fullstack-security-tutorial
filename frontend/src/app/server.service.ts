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
  getMessages() : Observable<any> {
    return this.http.get<any>(`${this.url}/messages`);
  }
  login(user : Credentials) : Observable<Credentials>{
    return this.http.post<Credentials>(`${this.url}/login`, user);
  }

  register(signUpDto : SignUp) : Observable<User>{
    return this.http.post<User>(`${this.url}/register`, signUpDto);
  }




}
