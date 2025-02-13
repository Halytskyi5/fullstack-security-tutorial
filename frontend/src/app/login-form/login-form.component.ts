import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  standalone: true
})
export class LoginFormComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active : string = "login";
  firstName : string = "";
  lastName : string = "";
  login: string = "";
  password: string = "";

  onLoginTab() {
    this.active = "login";
  }

  onRegisterTab() {
    this.active = "register";
  }

  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({
      "login": this.login,
      "password" : this.password
    });
  }

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "login": this.login,
      "password" : this.password
    });
  }

}
