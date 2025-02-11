import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = "http://localhost:8080";
  constructor(public http : HttpClient) { }
  getMessages() : Observable<any> {
    return this.http.get<any>(`${this.url}/messages`);
  }

}
