import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Example method to simulate login
  login() {
    this.isAuthenticated = true;
  }

  // Example method to simulate logout
  logout() {
    this.isAuthenticated = false;
  }

  // Method to check if the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
