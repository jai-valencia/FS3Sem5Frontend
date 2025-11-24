import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'app_token';

  constructor() {}

  login(username: string, password: string): boolean {

    // 🔥 Login simulado (cuando conectemos al microservicio lo cambiamos)
    if (username === 'admin' && password === '1234') {

      const fakeJwt =
        'eyFakeJwtToken_123456.ABCDEF.GHIJK'; // Token falso

      localStorage.setItem(this.tokenKey, fakeJwt);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
