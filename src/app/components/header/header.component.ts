import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  themes: { id: string; label: string }[] = [];
  currentTheme: string | null = null;

  constructor(private router: Router, private themeService: ThemeService) {
    this.themes = this.themeService.themes as { id: string; label: string }[];
    this.currentTheme = this.themeService.getTheme() ?? this.themes[0].id;
  }

  logout(): void{
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  isMenuOpen = false;

  selectTheme(name: string) {
    this.themeService.setTheme(name);
    this.currentTheme = name;
  }

}
