import {Component} from '@angular/core';
import {WelcomeContentComponent} from '../welcome-content/welcome-content.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {AuthService} from '../auth.service';
import {Credentials} from '../models/credentials';
import {User} from '../models/user';
import {SignUp} from '../models/signup';
import {ButtonsComponent} from '../components/buttons/buttons.component';
import {NgIf} from '@angular/common';
import {AuthContentComponent} from '../components/auth-content/auth-content.component';
import {CredentialsDto} from '../Dtos/credentialsDto';
import {SignupDto} from '../Dtos/signupDto';

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

  constructor(private authService: AuthService) {
  }

  showComponent(componentToShow: string) {
    this.componentToShow = componentToShow;
  }

  setToken(token : string) {
    this.authService.setAuthToken(token);
    this.componentToShow = "messages"
  }

  onLogin(input: CredentialsDto): void {
    console.log(input)
    this.authService.login(input).subscribe({
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

  onRegister(input: SignupDto) {
    this.authService.register(input).subscribe({
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
