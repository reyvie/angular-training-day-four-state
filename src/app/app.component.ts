import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoginAuth } from './states/auth.actions';

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

  constructor(private _store: Store) {}

  onLogin(): void {
    if (this.logins) {
      const login = Object.assign({}, this.logins);
      
      this._store.dispatch(new LoginAuth(this.logins));
    }
  }
}
