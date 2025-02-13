import { Component } from '@angular/core';
import { verbLibrary } from '../../data/conjugaison-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conjugaison-select',
  imports: [CommonModule],
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
}
