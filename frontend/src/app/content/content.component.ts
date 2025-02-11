import { Component } from '@angular/core';
import {WelcomeContentComponent} from '../welcome-content/welcome-content.component';
import {LoginFormComponent} from '../login-form/login-form.component';

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

}
