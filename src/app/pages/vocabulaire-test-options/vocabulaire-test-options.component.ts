import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { vocabLists } from '../../data/vocabulaire-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vocabulaire-test-options',
  imports: [FormsModule, CommonModule],
  templateUrl: './vocabulaire-test-options.component.html',
  styleUrl: './vocabulaire-test-options.component.scss'
})
export class VocabulaireTestOptionsComponent {
  listId: string = '';
  vocabList: any[] = [];
  
  accentgevoelig: boolean = true;
  tijddruk: boolean = false;
  toetsmodus: boolean = false;
  herhaalFouten: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const listId = params['list'];
      this.listId = params['list'];
      if (listId && vocabLists[listId]) {
        this.vocabList = vocabLists[listId].words;
        console.log(this.vocabList);
      } else {
        alert('Lijst niet gevonden.');
      }
    });
  }

  startTest() {
    const queryParams = {
      list: this.listId,
      accent: this.accentgevoelig,
      timeLimit: this.tijddruk,
      testMode: this.toetsmodus,
      repeatMistakes: this.herhaalFouten
    };

    this.router.navigate(['home/vocabulaire/test'], { queryParams });
  }
}
