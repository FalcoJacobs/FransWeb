import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { LoginDTO } from '../../models/login.dto';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  private router = inject(Router);

  protected loginform = this._formBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  protected loginSubmit(): void{
    if (this.loginform.valid) {
      const model: LoginDTO = {
        email: this.loginform.controls.email.value ?? '',
        password: this.loginform.controls.password.value ?? ''
      };

      if (model.email === 'test@mail.com' && model.password === 'password'){
        localStorage.setItem('user', JSON.stringify(model));
        this.router.navigate(['home']);
      }else{
        alert('False Login')
      }
    }
  }
}
