import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import  { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-eco-footprint-login',
  templateUrl: './eco-footprint-login.component.html',
  styleUrls: ['./eco-footprint-login.component.scss']
})
export class EcoFootprintLoginComponent implements OnInit {
  signinForm: FormGroup;
  hide = true;

  constructor(private _formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this._formBuilder.group({
      email: new FormControl('', [ Validators.email, Validators.required ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(3) ])
    });
  }

  get email() { return this.signinForm.get('email'); }
  get emailErrorMessage() {
    const email = this.signinForm.get('email');
    if (email.invalid && (email.dirty || email.touched)) {
      if (email.errors.required) return 'Email is required.';
      if (email.errors.email) return 'Email should be in the correct format.';
    }
    return false;
  }
  get password() { return this.signinForm.get('password'); }
  get passwordErrorMessage() {
    const password = this.signinForm.get('password');
    if (password.invalid && (password.dirty || password.touched)) {
      if (password.errors.required) return 'Password is required.';
      if (password.errors.minlength) return 'Password is too short.';
    }
    return false;
  }

  submit() {
    this.router.navigate(['/']);
    this.authService.login();
  }
}
