import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public currentYear: number = new Date().getFullYear();
  public githubLink: string = 'https://github.com/OlesiaTr';

  constructor(public translate: TranslateService) {}
}
