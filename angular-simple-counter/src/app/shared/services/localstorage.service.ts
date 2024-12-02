import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  setThemeMode(value: string): void {
    localStorage.setItem('themeMode', value);
  }

  getThemeMode(): string {
    return localStorage.getItem('themeMode') ?? 'dark';
  }

  setCounter(value: number): void {
    localStorage.setItem('counter', value.toString());
  }

  getCounter(): number {
    return parseInt(localStorage.getItem('counter') ?? '0', 10);
  }
}
