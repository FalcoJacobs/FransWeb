import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verb-masteries',
  imports: [RouterLink],
  templateUrl: './verb-masteries.component.html',
  styleUrl: './verb-masteries.component.scss'
})
export class VerbMasteriesComponent {
  verb: string = 'fdas';
}
