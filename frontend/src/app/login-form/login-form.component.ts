import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [
    FormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  standalone: true
})
export class LoginFormComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();

  login: string = "";
  password: string = "";

  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({
      "login": this.login,
      "password" : this.password
    });
  }

}
