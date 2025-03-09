import { Component } from '@angular/core';
import { tenseExercise } from '../../data/tense-exercise-data';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-tense-exercise',
  imports: [NgFor, CommonModule],
  templateUrl: './tense-exercise.component.html',
  styleUrl: './tense-exercise.component.scss'
})
export class TenseExerciseComponent {
  currentSentence: string = '';
  currentTense: string = '';
  currentTranslation: string = '';
  previousSentence: string = '';
  previousTense: string = '';
  previousTranslation: string = '';
  options: string[] = [];

  totalCorrect: number = 0;
  totalIncorrect: number = 0;
  accuracy: number = 0;

  isCorrect: boolean | null = null;
  correctAudio = new Audio('audio/vocabulaireCorrect.mp3');
  incorrectAudio = new Audio('audio/vocabulaireIncorrect.mp3')

  generateExercise() {
    this.previousTense = this.currentTense;
    this.previousSentence = this.currentSentence;
    this.previousTranslation = this.currentTranslation;
    const randomTenseIndex = Math.floor(Math.random() * tenseExercise.length);
    const randomTense = tenseExercise[randomTenseIndex];

    const randomSentenceIndex = Math.floor(Math.random() * randomTense.sentences.length);
    const randomSentence = randomTense.sentences[randomSentenceIndex];

    // if (Math.random() > 0.5){
    //   this.currentSentence = randomSentence.dutch;
    //   this.currentTranslation = randomSentence.french;
    // }else{
    //   this.currentSentence = randomSentence.french;
    //   this.currentTranslation = randomSentence.dutch;
    // }
    
    this.currentSentence = randomSentence.french;
    this.currentTranslation = randomSentence.dutch;
    this.currentTense = randomTense.tense;

    this.options = tenseExercise.map(tense => tense.tense);
  }

  checkAnswer(answer: string) {
    this.correctAudio.pause();
    this.correctAudio.currentTime = 0;
    this.incorrectAudio.pause();
    this.incorrectAudio.currentTime = 0;
    if (answer === this.currentTense) {
      this.correctAudio.play();
      this.totalCorrect++;      
      this.isCorrect = true;
    } else {
      this.incorrectAudio.play();
      this.totalIncorrect++;
      this.isCorrect = false;
    }
    this.accuracy = Math.round((this.totalCorrect / (this.totalIncorrect + this.totalCorrect)) * 100);
    this.generateExercise();
  }

  ngOnInit() {
    this.generateExercise();
  }
}
