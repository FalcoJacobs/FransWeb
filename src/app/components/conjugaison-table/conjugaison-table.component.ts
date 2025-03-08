import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-conjugaison-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './conjugaison-table.component.html',
  styleUrl: './conjugaison-table.component.scss'
})
export class ConjugaisonTableComponent {
  @Input() verb: string = '';
  @Input() stem: string = '';
  @Input() endingsType: string = '';
  @Input() dutchTranslation: string = '';

  pronouns = ['Je', 'Tu', 'Il / Elle', 'Nous', 'Vous', 'Ils / Elles'];

  endingsVerbsER = ['e', 'es', 'e', 'ons', 'ez', 'ent'];
  endingsVerbsRE = ['s', 's', '', 'ons', 'ez', 'ent'];

  private endingsMap: { [key: string]: string[] } = {
    ER: ['e', 'es', 'e', 'ons', 'ez', 'ent'],
    IRFinir: ['is', 'is', 'it', 'issons', 'issez', 'issent'],
    IRDormir: ['s', 's', 't', 'ons' , 'ez', 'ent'],
    RE: ['s', 's', '', 'ons', 'ez', 'ent']
  };

  get endings(): string[] {
    return this.endingsMap[this.endingsType] || [];
  }
}