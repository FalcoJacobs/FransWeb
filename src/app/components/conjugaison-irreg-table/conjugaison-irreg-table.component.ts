import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-conjugaison-irreg-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './conjugaison-irreg-table.component.html',
  styleUrl: './conjugaison-irreg-table.component.scss'
})
export class ConjugaisonIrregTableComponent {
  @Input() verb: string = '';
  @Input() dutchTranslation: string = '';
  @Input() conjugations: { [key: string]: string } = {};

  pronouns: { label: string, key: string }[] = [
    { label: "Je", key: "je" },
    { label: "Tu", key: "tu" },
    { label: "Il / Elle", key: "il" },
    { label: "Nous", key: "nous" },
    { label: "Vous", key: "vous" },
    { label: "Ils / Elles", key: "ils" }
  ];
}
