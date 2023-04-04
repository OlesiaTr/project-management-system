import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/interfaces/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  logout() {
    this.authService.signout();
  }

  createBoardBtn() {
    this.router.navigate(['/create-board']);
  }

  deleteUser() {
    const id = localStorage.getItem('userId');
    if (!id) return;

    this.authService.getUser(id).subscribe((user) => {
      this.authService.deleteUser(user).subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }
}
