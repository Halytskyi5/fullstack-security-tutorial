import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {AuthContentComponent} from './auth-content/auth-content.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, AuthContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'frontend';
}
