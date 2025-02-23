import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { verbLibrary, VerbLibrary } from '../../data/conjugaison-data';

@Component({
  selector: 'app-conjugaison-test',
  imports: [FormsModule, CommonModule],
  templateUrl: './conjugaison-test.component.html',
  styleUrl: './conjugaison-test.component.scss'
})
export class ConjugaisonTestComponent implements OnInit{
  verbLibrary: VerbLibrary = verbLibrary;

  mistakes: any[] = [];
  exerciseResults: any[] = [];

  selectedTenses: string[] = [];
  selectedIrregularVerbs: string[] = [];
  selectedRegularVerbs: string[] = [];
  selectedVerbs: string[] = [];

  currentTense: string = "";
  currentVerb: string = "";
  currentSubject: string = "";
  correctAnswer: string = "";

  userInput: string = "";
  isCorrect: boolean | null = null;
  totalCorrect: number = 0;
  totalIncorrect: number = 0;
  accuracy: number = 0;

  previousTense: string = "";
  previousVerb: string = "";
  previousSubject: string = "";
  previousInput: string = "";
  previousAnswer: string = "";

  testMode: boolean = false;
  accentSensitive: boolean = false;
  allowMistakes: boolean = false;
  hideResults: boolean = false;
  numExercises: number = 20;

  correctAudio = new Audio('audio/vocabulaireCorrect.mp3');
  incorrectAudio = new Audio('audio/vocabulaireIncorrect.mp3')

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedTenses = params['tenses'] ? params['tenses'].split(',') : [];
      this.selectedIrregularVerbs = params['irregularVerbs'] ? params['irregularVerbs'].split(',') : [];
      this.selectedRegularVerbs = params['regularVerbs'] ? params['regularVerbs'].split(',') : [];

      this.testMode = params['testMode'] === 'true';
      this.accentSensitive = params['accentSensitive'] === 'true';
      this.allowMistakes = params['allowMistakes'] === 'true';
      this.hideResults = params['hideResults'] === 'true';
      this.numExercises = params['numExercises'] ? parseInt(params['numExercises'], 10) : 20;
    });
    this.selectedVerbs = this.selectedIrregularVerbs.concat(this.selectedRegularVerbs);
    this.newExercise();
  }

  getSubjects(verb: string, tense: string) {
    const verbData = this.verbLibrary.verbs[verb];
    if (verbData && verbData.tense[tense]) {
      return Object.keys(verbData.tense[tense]);
    }
    return []
  }

  newExercise(): void {
    if (this.selectedTenses.length === 0 || this.selectedVerbs.length === 0){
      alert("ERROR");
      return
    }

    this.previousTense = this.currentTense;
    this.previousVerb = this.currentVerb;
    this.previousSubject = this.currentSubject;
    this.previousInput = this.userInput;
    this.previousAnswer = this.correctAnswer;
    

    this.userInput = '';
    this.currentTense = this.selectedTenses[Math.floor(Math.random() * this.selectedTenses.length)];
    this.currentVerb = this.selectedVerbs[Math.floor(Math.random() * this.selectedVerbs.length)];
    const possibleSubjects: string[] = this.getSubjects(this.currentVerb, this.currentTense);
    this.currentSubject = possibleSubjects[Math.floor(Math.random() * possibleSubjects.length)]
    this.correctAnswer = this.verbLibrary.verbs[this.currentVerb].tense[this.currentTense][this.currentSubject];
  }
  
  checkAnswer(): void {
    if (!this.accentSensitive){
      const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
      this.isCorrect = normalize(this.userInput) === normalize(this.correctAnswer);
    }else{
      this.isCorrect = this.userInput.trim().toLowerCase() === this.correctAnswer.trim().toLowerCase();
    }

    this.correctAudio.pause();
    this.correctAudio.currentTime = 0;
    this.incorrectAudio.pause();
    this.incorrectAudio.currentTime = 0;

    if(this.isCorrect){
      this.correctAudio.play();
      this.totalCorrect++;
    }else{
      this.incorrectAudio.play();
      this.totalIncorrect++;
      this.mistakes.push({
        tense: this.currentTense,
        verb: this.currentVerb,
        subject: this.currentSubject,
        answer: this.correctAnswer,
        input: this.userInput,
        correct: this.isCorrect
      });
    }
    
    this.updateAccuracy()

    this.exerciseResults.push({
      tense: this.currentTense,
      verb: this.currentVerb,
      subject: this.currentSubject,
      answer: this.correctAnswer,
      input: this.userInput,
      correct: this.isCorrect
    });

    if ((this.totalCorrect + this.totalIncorrect) === this.numExercises) {
      const queryParams = {
        mistakes: JSON.stringify(this.mistakes),
        exerciseResults: JSON.stringify(this.exerciseResults),
        accuracy: this.accuracy,
        totalCorrect: this.totalCorrect,
        totalIncorrect: this.totalIncorrect,
      };
      this.router.navigate(['/home/conjugaison/test-results'], { queryParams });
      return;
    }
    this.newExercise();
  }

  updateAccuracy(): void {
    this.accuracy = Math.round((this.totalCorrect / (this.totalCorrect + this.totalIncorrect)) * 100);
    console.log(this.accuracy);
  }
}
