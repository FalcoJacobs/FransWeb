import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { vocabLists } from '../../data/vocabulaire-data';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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


  generatePDF(antwoordenblad: boolean = true){
    const doc = new jsPDF();
    doc.setFontSize(20);
    if(antwoordenblad){
      doc.text('Vocabulaire Antwoordenblad', 60, 10);
    }else{
      doc.text('Vocabulaire Oefeningen', 60, 10);
    }
    doc.setFontSize(13);
    doc.text(this.listId, 10,20);
    doc.text('aantal woorden: ' + this.vocabList.length, 10, 30)

    const headers = [['Nederlands', 'Frans']];
    var data:string[][] = [];
    this.vocabList.forEach((verb: { dutch: string[]; french: string[] }) => {
      const dutchWords: string[] = Array.isArray(verb.dutch) ? verb.dutch : [verb.dutch];
      const frenchWords: string[] = Array.isArray(verb.french) ? verb.french : [verb.french];

      frenchWords.forEach((fr: string) => {
        var dutchString: string = '';
        dutchWords.forEach((nl: string) => {
          dutchString+= nl;
        })
        if(antwoordenblad){
          data.push([dutchString, fr]);
        }else{
          data.push([dutchString, '']);
        }
      });
    });


    autoTable(doc, {
      head: headers,
      body: data,
      startY: 40,
      columnStyles: {
        0: { cellWidth: 'auto' },
        1: { cellWidth: 100 },
      },
      didDrawCell: function (data) {
        // Add vertical line after first column (index 0)
        if (data.column.index === 0) {
          const { doc, cell } = data;
          const x = cell.x + cell.width;
          const yTop = cell.y;
          const yBottom = cell.y + cell.height;

          doc.setDrawColor(0); // black
          doc.setLineWidth(0.5);
          doc.line(x, yTop, x, yBottom);
        }
      }
    })
    doc.save('Vocabulaire-'+ this.listId + '.pdf');
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
