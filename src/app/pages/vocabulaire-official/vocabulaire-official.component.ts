import { Component } from '@angular/core';
import { vocabulaireCategories } from '../../data/vocabulaire-data';
import { vocabLists } from '../../data/vocabulaire-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocabulaire-official',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vocabulaire-official.component.html',
  styleUrl: './vocabulaire-official.component.scss'
})
export class VocabulaireOfficialComponent {
  vocabulaireCategories = vocabulaireCategories;
  searchTerm: string = '';
  filteredItems: any[] = [];
  showResults: boolean = false;

  allItems = vocabulaireCategories.flatMap(category => category.items);

  constructor(private router: Router) {}


  OnSearchChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(vocabLists['lance5-t1-e1'])
    this.filteredItems = this.allItems.filter(item =>
      this.normalizeText(item.name).includes(value) || this.normalizeText(item.translation).includes(value)
    );
    this.showResults = this.filteredItems.length > 0 && value.length > 0;
  }
  
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.filteredItems.length > 0) {
      this.selectItem(this.filteredItems[0]);
    }
  }

  normalizeText(text: string): string {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }

  selectItem(item: any) {
    this.router.navigate(['/home/grammaire', item.path]);
    this.showResults = false;
  }
  

  hideResults() {
    this.showResults = false;
  }

  ngOnInit() {
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  handleClickOutside(event: MouseEvent) {
    const searchBar = document.getElementById('searchbar');
    if (searchBar && !searchBar.contains(event.target as Node)) {
      this.hideResults();
    }
  }


}