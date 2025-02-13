import {Component} from '@angular/core';
import {WelcomeContentComponent} from '../welcome-content/welcome-content.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {ServerService} from '../server.service';
import {User} from '../models/user';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import {tap} from 'rxjs';

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
  constructor(private serverService: ServerService) {
  }

  onLogin(user: User): void {
    console.log(user)
    this.serverService.postLogin(user).subscribe({
      next: (response) => {
        console.log('res ', response)
      },
      error: (error) => {
        console.log(error.error.message)
      },
      complete: () => {
        console.log('finish')
      }
    });
  }

}
