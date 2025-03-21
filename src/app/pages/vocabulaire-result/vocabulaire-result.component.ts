import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-vocabulaire-result',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './vocabulaire-result.component.html',
  styleUrl: './vocabulaire-result.component.scss'
})
export class VocabulaireResultComponent { 
  
  constructor(private route: ActivatedRoute) {}
  
  exerciseResults: any[] = [];
  mistakes: any[] = [];
  amountOfMistakes: number = this.mistakes.length;
  
  accuracy: number = 0;
  totalCorrect: number = 0;
  totalIncorrect: number = 0;
  mistakesAdded: number = 0;
  list: string = '';

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.mistakes = params['mistakes'] ? JSON.parse(params['mistakes']) : [];
        this.amountOfMistakes = this.mistakes.length;
        this.exerciseResults = params['exerciseResults'] ? JSON.parse(params['exerciseResults']) : [];
        this.accuracy = parseInt(params['accuracy']);
        this.totalCorrect = parseInt(params['totalCorrect']);
        this.totalIncorrect= parseInt(params['totalIncorrect']);
        this.mistakesAdded = parseInt(params['mistakesAdded']);
        this.list = params['vocListId'];
      });
      console.log(this.mistakes)
    }
    
  notYetFunction(){
    alert('deze functie werkt nog niet, dit is nog maar een test release');
  }
}
