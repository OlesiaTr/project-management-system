import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

import en from 'src/assets/i18n/en.json';
import ua from 'src/assets/i18n/ua.json';
import ru from 'src/assets/i18n/ru.json';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-management-system';

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguagesService
  ) {
    translate.setDefaultLang('en');
    this.translate.setTranslation('en', en);
    this.translate.setTranslation('ua', ua);
    this.translate.setTranslation('ru', ru);

    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang);
    });
  }

  ngOnInit() {
    const token = this.authService.getToken();

    if (token && !this.authService.isTokenExpired(token)) {
      this.router.navigate(['/main']);
    } else {
      this.authService.signout();
      this.router.navigate(['/welcome']);
    }
  }
}
