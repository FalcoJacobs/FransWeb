import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'theme';
  readonly themes = [
    { id: 'theme-1', label: 'Groen' },
    { id: 'theme-9', label: 'Munt' },
    { id: 'theme-10', label: 'Zeegroen' },
    { id: 'theme-6', label: 'Mos' },
    { id: 'theme-5', label: 'Lavendel' },
    { id: 'theme-11', label: 'Paars' },
    { id: 'theme-2', label: 'Donker Paars' },
    { id: 'theme-12', label: 'Schemerblauw' },
    { id: 'theme-8', label: 'Terracotta' },
    { id: 'theme-3', label: 'Rood' },
    { id: 'theme-7', label: 'Zacht Grijs' },
    { id: 'theme-4', label: 'Donker' },
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
