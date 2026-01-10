import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginDTO } from '../../models/login.dto';


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
  private router = inject(Router);
  login(){
        const model: LoginDTO = {
          email: 'test',
          password: 'test'
        };
        localStorage.setItem('user', JSON.stringify(model));
        this.router.navigate(['home']);
  }
}
