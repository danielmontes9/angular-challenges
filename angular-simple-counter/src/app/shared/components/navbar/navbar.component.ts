import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isDarkMode = true;

  constructor(
    public themeService: ThemeService,
    private localStorageService: LocalstorageService
  ) {
    if (this.localStorageService.getThemeMode() == null) {
      this.localStorageService.setThemeMode('dark');
    } else {
      this.isDarkMode = this.localStorageService.getThemeMode() === 'dark';
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark';
    this.localStorageService.setThemeMode(this.isDarkMode ? 'dark' : 'light');
  }
}
