import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'theme';
  readonly themes = [
    'theme-1',
    'theme-2',
    'theme-3',
    'theme-4',
    'theme-5',
    'theme-6',
    'theme-7',
  ];

  setTheme(name: string) {
    if (!name) return;
    document.documentElement.setAttribute('data-theme', name);
    try {
      localStorage.setItem(this.storageKey, name);
    } catch {}
  }

  getTheme(): string | null {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr;
    try {
      return localStorage.getItem(this.storageKey);
    } catch {
      return null;
    }
  }

  initTheme(defaultTheme = 'theme-1') {
    const stored = this.getTheme() ?? defaultTheme;
    this.setTheme(stored);
  }
}
