import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  notYetFunction(){
    alert('deze functie werkt nog niet, dit is nog maar een test release');
  }
}
