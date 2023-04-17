import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isAuthenticated!: boolean;
  @ViewChild('createBoardModal') createBoardModal!: TemplateRef<any>;

  constructor(
    private router: Router,
    private authService: AuthService,
    public translate: TranslateService,
    private languageService: LanguagesService,
    private modalService: NgbModal
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
    this.modalService.open(this.createBoardModal, { centered: true });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  deleteUser() {
    const userInfo = localStorage.getItem('userInfo');
    const id = userInfo ? JSON.parse(userInfo).userId : '';
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
