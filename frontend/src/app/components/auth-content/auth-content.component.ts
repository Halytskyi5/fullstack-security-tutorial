import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../auth.service';
import {NgForOf} from '@angular/common';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-auth-content',
  imports: [
    NgForOf
  ],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.scss',
  standalone: true
})
export class AuthContentComponent implements OnInit {
  data : string[] = [];
  constructor(public serverService : AuthService) {
  }
  ngOnInit() {
    this.serverService.getMessages().subscribe(response => this.data = response);
  }

  protected readonly dateTimestampProvider = dateTimestampProvider;
}
