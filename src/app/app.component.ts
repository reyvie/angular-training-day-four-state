import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'training-day-four-state';
  logins = {
    username: '',
    password: ''
  }

  constructor() {}

  onLogin(): void {

  }
}
