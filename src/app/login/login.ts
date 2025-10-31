import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  validEmail = 'amr@gmail.com';
  validPassword = '123456';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      this.router.navigate(['/interface']);
    } else {
      alert('Invalid email or password');
    }
  }
}
