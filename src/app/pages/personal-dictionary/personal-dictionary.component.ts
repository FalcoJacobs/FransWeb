import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-dictionary',
  imports: [],
  templateUrl: './personal-dictionary.component.html',
  styleUrl: './personal-dictionary.component.scss'
})
export class PersonalDictionairyComponent {

  username: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });    
  }
}
