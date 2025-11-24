import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    const ok = this.auth.login(this.username, this.password);

    if (!ok) {
      this.error = true;
      return;
    }

    this.router.navigate(['/usuarios']);
  }
}
