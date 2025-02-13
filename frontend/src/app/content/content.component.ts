import {Component} from '@angular/core';
import {WelcomeContentComponent} from '../welcome-content/welcome-content.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {ServerService} from '../server.service';
import {Credentials} from '../models/credentials';
import {User} from '../models/user';
import {SignUp} from '../models/signup';

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

  onLogin(input: Credentials): void {
    console.log(input)
    this.serverService.login(input).subscribe({
      next: (response) => {
        console.log('res ', response)
      },
      error: (error) => {
        console.log(error.error.message)
      },
      complete: () => {
        console.log('finish onLogin()')
      }
    });
  }

  onRegister(input: SignUp) {
    this.serverService.register(input).subscribe({
      next : response => {
        console.log("successfully: ");
        console.log(response);
      },
      error: err => {
        console.log("error: " + err.error.error);
      },
      complete: () => {
        console.log("complete register");
      }
    })
  }

}
