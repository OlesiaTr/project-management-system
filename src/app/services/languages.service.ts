import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private currentLangSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('en');

  public currentLang$ = this.currentLangSubject.asObservable();

  constructor() {}

  public setCurrentLang(language: string): void {
    this.currentLangSubject.next(language);
  }
}
