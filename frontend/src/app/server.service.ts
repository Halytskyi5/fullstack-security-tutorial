import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = "http://localhost:8080";
  constructor(http : HttpClient) { }
}
