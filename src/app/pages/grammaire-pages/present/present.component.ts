import { Component, OnInit } from '@angular/core';
import { ConjugaisonTableComponent } from '../../../components/conjugaison-table/conjugaison-table.component';
import { ConjugaisonIrregTableComponent } from '../../../components/conjugaison-irreg-table/conjugaison-irreg-table.component';

@Component({
  selector: 'app-present',
  imports: [ConjugaisonTableComponent, ConjugaisonIrregTableComponent],
  templateUrl: './present.component.html',
  styleUrl: './present.component.scss'
})
export class PresentComponent{
}
