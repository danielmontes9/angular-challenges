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
    this.localStorageService.setThemeMode(this.currentTheme);
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  getCurrentTheme(): string {
    this.currentTheme = this.localStorageService.getThemeMode();
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    return this.currentTheme;
  }
}
