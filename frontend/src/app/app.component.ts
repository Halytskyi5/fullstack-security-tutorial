import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthContentComponent} from './components/auth-content/auth-content.component';
import {ContentComponent} from './pages/content/content.component';
import {WelcomeContentComponent} from './components/welcome-content/welcome-content.component';

@Component({
  selector: 'app-root',
  imports: [AuthContentComponent, ContentComponent, WelcomeContentComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'frontend';
}
