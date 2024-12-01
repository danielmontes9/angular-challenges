import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'dark';

  constructor() {}

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
