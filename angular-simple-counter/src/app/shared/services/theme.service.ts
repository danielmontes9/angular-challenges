import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'dark';

  constructor(private localStorageService: LocalstorageService) {}

  toggleTheme(): void {
    this.currentTheme === 'dark'
      ? (this.currentTheme = 'light')
      : (this.currentTheme = 'dark');
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }
}
