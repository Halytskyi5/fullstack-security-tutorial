import {Component} from '@angular/core';
import {WelcomeContentComponent} from '../welcome-content/welcome-content.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {ServerService} from '../server.service';

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

  onLogin(input: any): void {
    console.log(input)
    const loginUser = {
      login: input.login,
      password: input.password
    };
    this.serverService.postUser(loginUser, "login").subscribe({
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

  onRegister(input: any) {
    const registerUser = {
      firstName : input.firstName,
      lastName : input.lastName,
      login : input.login,
      password : input.password
    };
    this.serverService.postUser(registerUser, "register").subscribe({
      next : value => {
        console.log("successfully: " + value);
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
