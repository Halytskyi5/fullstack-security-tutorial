import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {AuthContentComponent} from './components/auth-content/auth-content.component';
import {ContentComponent} from './content/content.component';
import {WelcomeContentComponent} from './welcome-content/welcome-content.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, AuthContentComponent, ContentComponent, WelcomeContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'frontend';
}
