import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(
    private toast: ToastService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ],
      ],
    });
  }

  onSubmit(): void {
    this.authService
      .signin(this.signInForm.value.login, this.signInForm.value.password)
      .subscribe({
        next: (data) => {
          console.log('data:', data);
          if (!data.token)
            return this.toast.showError('Error signing in. Please try again.');

          localStorage.setItem('token', data.token);
          this.router.navigateByUrl('/main');
          this.toast.showSuccess('You have successfully signed in!');
        },
        error: (err) => {
          console.log(err);
          this.toast.showError('Error signing in. Please try again.');
        },
      });
  }
}
