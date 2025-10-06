import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators , ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-home-component',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css'],
  standalone: true,
})
export class HomeComponent {

  empresa = '';
  uf = '';
  produto = '';
  
  formSubmitted = false;

  onSubmit() {
    this.formSubmitted = true;

    if (!this.uf || !this.produto || !this.empresa) {
      return; // impede o envio se campos inválidos
    }

    console.log('Consulta enviada:', { empresa: this.empresa, uf: this.uf, produto: this.produto });
  }



}
