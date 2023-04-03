import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-management-system';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const token = this.authService.getToken();

    if (token && !this.authService.isTokenExpired(token)) {
      this.router.navigate(['projects']);
    } else {
      this.authService.signout();
      this.router.navigate(['/welcome']);
    }
  }
}
