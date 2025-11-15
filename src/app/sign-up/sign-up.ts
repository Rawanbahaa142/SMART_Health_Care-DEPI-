import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  data={
    name:null,
    email:null,
    password:null,
  }

  constructor(private router: Router) {}

handelForm(form: NgForm) {
  if (form.valid) {
    this.router.navigate(['/login']);
  } else {
    form.control.markAllAsTouched();
  }
}

}
