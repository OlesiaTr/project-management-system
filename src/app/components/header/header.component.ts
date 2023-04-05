import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isAuthenticated!: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    public translate: TranslateService,
    private languageService: LanguagesService
  ) {
    this.authService
      .isLoggedIn()
      .subscribe((auth) => (this.isAuthenticated = auth));
  }

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
        this.authService.signout();
        this.router.navigate(['/']);
      });
    });
  }

  changeLanguage(event: any) {
    const value = event?.target?.value;
    if (!value) return;

    this.languageService.setCurrentLang(value);
  }
}
