import { Component } from '@angular/core';
import { verbLibrary } from '../../data/conjugaison-data';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conjugaison-select',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './conjugaison-select.component.html',
  styleUrl: './conjugaison-select.component.scss'
})
export class ConjugaisonSelectComponent {
  verbLibrary: Record<string, { type: string; tense: Record<string, any> }> = verbLibrary.verbs;

  tenses: string[] = Array.from(
    new Set(
      Object.values(this.verbLibrary).flatMap(verb => Object.keys(verb.tense))
    )
  );
  irregularVerbs: string[] = Object.keys(this.verbLibrary).filter(
    (verb) => this.verbLibrary[verb].type === 'irregular'
  );
  regularVerbs: string[] = Object.keys(this.verbLibrary).filter(
    (verb) => this.verbLibrary[verb]?.type === 'regular'
  );

  selectedTenses: string[] = [];
  selectedIrregularVerbs: string[] = [];
  selectedRegularVerbs: string[] = [];

  testMode: boolean = false;
  accentSensitive: boolean = true;
  allowMistakes: boolean = true;
  hideResults: boolean = false;
  numExercises: number = 20;

  constructor(private router: Router) {}

  toggleSelection(array: string[], value: string): void {
    if (array.includes(value)) {
      array.splice(array.indexOf(value), 1);
    }else{
      array.push(value);
    }
  }

  startTest(): void {
    this.router.navigate(['home/conjugaison/test'], {
      queryParams: {
        tenses: this.selectedTenses.join(','),
        irregularVerbs: this.selectedIrregularVerbs.join(','),
        regularVerbs: this.selectedRegularVerbs.join(','),
        testMode: this.testMode,
        accentSensitive: this.accentSensitive,
        allowMistakes: this.allowMistakes,
        hideResults: this.hideResults,
        numExercises: this.numExercises
      }
    })
  }

  canStartTest(): boolean {
    return (
      (this.selectedIrregularVerbs.length > 0 || this.selectedRegularVerbs.length > 0) &&
      this.selectedTenses.length > 0
    );
  }

  selectAll(array: string[], values: string[]): void {
    array.length = 0; 
    array.push(...values); 
    setTimeout(() => {}, 0);
  }
  
  deselectAll(array: string[]): void {
    array.length = 0;
    setTimeout(() => {}, 0);
  }
}
