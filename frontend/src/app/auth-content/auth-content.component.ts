import { Component } from '@angular/core';
import {AxiosService} from '../axios.service';

@Component({
  selector: 'app-auth-content',
  imports: [AxiosService],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.scss',
  standalone: true
})
export class AuthContentComponent {
  data: string[] = [];

  constructor(private axiosService : AxiosService) {
  }
  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
    ).then(
      response => this.data = response.data
    )
  }
}
