import {Component, inject} from '@angular/core';
import {WelcomeContentComponent} from '../../components/welcome-content/welcome-content.component';
import {LoginFormComponent} from '../../components/login-form/login-form.component';
import {AuthService} from '../../auth.service';
import {ButtonsComponent} from '../../components/buttons/buttons.component';
import {NgIf} from '@angular/common';
import {AuthContentComponent} from '../../components/auth-content/auth-content.component';
import {CredentialsDto} from '../../dtos/credentialsDto';
import {SignupDto} from '../../dtos/signupDto';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [
    WelcomeContentComponent,
    LoginFormComponent,
    ButtonsComponent,
    NgIf,
    AuthContentComponent,
    RouterLink
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

  setToken(token : string | null) {
    this.authService.setAuthToken(token);
    this.componentToShow = "messages"
  }
  logout() {
    this.showComponent('welcome');
    this.setToken(null)
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
  router = inject(Router);
  toTest() {
    this.router.navigateByUrl('/test').then(result => {
      if (!result) {
        this.router.navigateByUrl('/contents')
      }
    } );
  }

  protected readonly toolbar = toolbar;
}
