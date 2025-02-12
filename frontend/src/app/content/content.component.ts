import { Component } from '@angular/core';
import {WelcomeContentComponent} from '../welcome-content/welcome-content.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {ServerService} from '../server.service';
import {User} from '../models/user';

@Component({
  selector: 'app-content',
  imports: [
    WelcomeContentComponent,
    LoginFormComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true
})
export class ContentComponent {
  constructor(private serverService : ServerService) {
  }

  onLogin(user : User) : void {
    this.serverService.postLogin(user);
    console.log(user)
  }
 }
