import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../background.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  background!: string;
  loginForm: FormGroup;
  signupForm: FormGroup;
  loginFormActive: boolean = false;
  signupFormActive: boolean = false;

  constructor(
    private backgroundService: BackgroundService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      courses: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.background = this.backgroundService.getNextBackground();

    // Automatically change background every 5 seconds (5000 milliseconds)
    setInterval(() => {
      this.background = this.backgroundService.getNextBackground();
    }, 5000);
  }

  showLoginForm() {
    this.loginFormActive = true;
    this.signupFormActive = false;
  }

  showSignupForm() {
    this.loginFormActive = false;
    this.signupFormActive = true;
  }

  login() {
    // Implement login logic here
    console.log('Login form submitted:', this.loginForm.value);
  }

  signup() {
    // Implement signup logic here
    console.log('Signup form submitted:', this.signupForm.value);
  }

  hideForms() {
    this.loginFormActive = false;
    this.signupFormActive = false;
  }
}
