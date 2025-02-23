import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-classement',
  imports: [RouterLink, CommonModule],
  templateUrl: './classement.component.html',
  styleUrl: './classement.component.scss'
})
export class ClassementComponent {
  selected: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selected = params['selected'];
    });
    console.log(this.selected);    
  }
}
