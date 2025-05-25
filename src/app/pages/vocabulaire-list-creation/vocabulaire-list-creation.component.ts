import { CommonModule, NgFor } from '@angular/common';
import { Component, ViewChildren, ViewChild, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-vocabulaire-list-creation',
  imports: [NgFor],
  templateUrl: './vocabulaire-list-creation.component.html',
  styleUrl: './vocabulaire-list-creation.component.scss'
})
export class VocabulaireListCreationComponent {
  rows: number[] = [1];

  @ViewChild('listNameInput') listNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('listDescriptionInput') listDescriptionInput!: ElementRef<HTMLInputElement>;

  @ViewChildren('dutchInput') dutchInputs!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('frenchInput') frenchInputs!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('exampleInput') exampleInputs!: QueryList<ElementRef<HTMLInputElement>>;

  
  createdVocList: {
    name?: string,
    description?: string,
    words?: Word[]
  } = {};
  
  @ViewChildren('firstInput') firstInputs!: QueryList<ElementRef<HTMLInputElement>>;

  addRow() {
    this.rows.push(this.rows.length + 1);
    setTimeout(() => {
      const firstInput = this.dutchInputs.toArray().at(-1);
      firstInput?.nativeElement.focus();
    });
  }
  
  removeRow() {
    if(this.rows.length > 1){
      this.rows.pop();
    }
    setTimeout(() => {
      const firstInput = this.dutchInputs.toArray().at(-1);
      firstInput?.nativeElement.focus();
    });
  }
  
  onEnter(event: Event) {
    event.preventDefault();
    this.addRow();
  }
  
  makeObject(){
    const name = this.listNameInput.nativeElement.value;
    const description = this.listDescriptionInput.nativeElement.value;

    const dutchArray = this.dutchInputs.toArray();
    const frenchArray = this.frenchInputs.toArray();
    const exampleArray = this.exampleInputs.toArray();

    const words: Word[] = [];

    for (let i = 0; i < dutchArray.length; i++) {
      const dutch = dutchArray[i].nativeElement.value.trim();
      const french = frenchArray[i].nativeElement.value.trim();
      const example = exampleArray[i].nativeElement.value.trim();

      if (dutch || french || example) {
        words.push(new Word(dutch, french, example));
      }
    }

    this.createdVocList = {
      name,
      description,
      words
    };

    console.log('createdVocList:', this.createdVocList);
  }

}

export class Word {
  constructor(
    public dutch: string, 
    public french: string, 
    public exampleSentence: string){}
}