import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vocabLists } from '../../data/vocabulaire-data';
import { VocabWord } from '../../data/vocabulaire-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vocabulaire-test',
  imports: [FormsModule, CommonModule],
  templateUrl: './vocabulaire-test.component.html',
  styleUrl: './vocabulaire-test.component.scss'
})
export class VocabulaireTestComponent {
  accentgevoelig: boolean = false;
  tijddruk: boolean = false;
  herhaalFouten: boolean = false;

  vocabList: any[] = [];
  availableWords: any[] = [];
  mistakes: any[] = [];
  currentWord: any | null = null;

  totalCorrect: number = 0;
  totalIncorrect: number = 0;
  accuracy: number = 0;
  mistakesAdded: number = 0;

  previousDutch: string = "";
  previousFrench: string = "";
  previousInput: string = "";

  userInput: string = "";
  isCorrect: boolean | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const listId = params['list'];
      if (listId && vocabLists[listId]) {
        this.vocabList = vocabLists[listId].words;
        this.availableWords = [...this.vocabList]
        this.newWord();
      } else {
        alert('Lijst niet gevonden.');
      }
      this.accentgevoelig = params['accent'] === 'true';
      this.tijddruk = params['timeLimit'] === 'true';
      this.herhaalFouten = params['repeatMistakes'] === 'true';
    });
  }

  newWord(): void{
    if (this.availableWords.length === 0) {
      this.currentWord = null;
      alert('end');
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.availableWords.length);
    this.currentWord = this.availableWords[randomIndex];
    this.availableWords.splice(randomIndex, 1);

    this.userInput = "";
  }

  checkAnswer(): void {
    if (!this.currentWord) return;

    const correctAnswers = Array.isArray(this.currentWord.french)
    ? this.currentWord.french
    : [this.currentWord.french];

    let isCorrect = correctAnswers.some((answer: VocabWord) => {
      const frenchWords = Array.isArray(answer) ? answer : [answer];
      return frenchWords.some((word) => this.compareWords(word, this.userInput));
    });


    this.previousDutch = this.currentWord.dutch;
    this.previousFrench = correctAnswers.join(', ');
    this.previousInput = this.userInput || "..."

    if (isCorrect){
      this.totalCorrect++;
    } else {
      
      if (this.herhaalFouten){
        this.availableWords.push(this.currentWord);
        this.mistakesAdded++;
      }
      this.totalIncorrect++;
      this.mistakes.push(this.currentWord);
    }

    this.isCorrect = isCorrect;
    this.updateAccuracy();

    this.newWord();
  }

  compareWords(word: string | undefined, userInput: string): boolean {
    if (!word || !userInput) {
      return false;
    }
    const wordLower = word.toLowerCase().trim();
    const userInputLower = userInput.toLowerCase().trim();
  
    if (this.accentgevoelig) {
      return wordLower === userInputLower;
    } else {
      const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
      return normalize(wordLower) === normalize(userInputLower);
    }
  }
  

  updateAccuracy(): void {
    this.accuracy = Math.round((this.totalCorrect / (this.totalCorrect + this.totalIncorrect)) * 100) || 0;
  }
}
