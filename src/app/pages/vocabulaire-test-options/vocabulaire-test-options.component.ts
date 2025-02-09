import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vocabulaire-test-options',
  imports: [FormsModule],
  templateUrl: './vocabulaire-test-options.component.html',
  styleUrl: './vocabulaire-test-options.component.scss'
})
export class VocabulaireTestOptionsComponent {
  listId: string = '';
  
  accentgevoelig: boolean = true;
  tijddruk: boolean = false;
  toetsmodus: boolean = false;
  herhaalFouten: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.listId = params['list'];
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
