import {Component} from '@angular/core';
import {WelcomeContentComponent} from '../welcome-content/welcome-content.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {ServerService} from '../server.service';
import {Credentials} from '../models/credentials';
import {User} from '../models/user';
import {SignUp} from '../models/signup';
import {ButtonsComponent} from '../buttons/buttons.component';
import {NgIf} from '@angular/common';
import {AuthContentComponent} from '../auth-content/auth-content.component';

@Component({
  selector: 'app-content',
  imports: [
    WelcomeContentComponent,
    LoginFormComponent,
    ButtonsComponent,
    NgIf,
    AuthContentComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true
})
export class ContentComponent {
  componentToShow: string = "welcome";

  constructor(private serverService: ServerService) {
  }

  showComponent(componentToShow: string) {
    this.componentToShow = componentToShow;
  }

  setToken(token : string) {
    this.serverService.setAuthToken(token);
    this.componentToShow = "messages"
  }

  onLogin(input: Credentials): void {
    console.log(input)
    this.serverService.login(input).subscribe({
      next: (response) => {
        this.setToken(response.token);
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
      next: response => {
        this.setToken(response.token);
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
