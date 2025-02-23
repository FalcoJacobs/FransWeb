import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-conjugaison-result',
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './conjugaison-result.component.html',
  styleUrl: './conjugaison-result.component.scss'
})
export class ConjugaisonResultComponent {
  
  constructor(private route: ActivatedRoute) {}
  
  exerciseResults: any[] = [];
  mistakes: any[] = [];
  
  accuracy: number = 0;
  totalCorrect: number = 0;
  totalIncorrect: number = 0;

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.mistakes = params['mistakes'] ? JSON.parse(params['mistakes']) : [];
        this.exerciseResults = params['exerciseResults'] ? JSON.parse(params['exerciseResults']) : [];
        this.accuracy = parseInt(params['accuracy']);
        this.totalCorrect = parseInt(params['totalCorrect']);
        this.totalIncorrect= parseInt(params['totalIncorrect']);
      });
      console.log(this.mistakes);
      console.log(this.exerciseResults);
    }

}
