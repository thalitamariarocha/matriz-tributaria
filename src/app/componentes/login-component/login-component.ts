import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {

  login = '';
  senha = '';

  
  formSubmitted = false;

  onSubmit() {
    this.formSubmitted = true;

    if (!this.login || !this.senha) {
      return console.log('nao enviado, erro');; // impede o envio se campos inválidos
      
    }

    console.log('Consulta enviada:', { login: this.login, senha: this.senha });
  }

}
