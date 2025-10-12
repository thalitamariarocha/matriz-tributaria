import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, Validators , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-produto-component.html',
  styleUrl: './cadastro-produto-component.css'
})
export class CadastroProdutoComponent {

  uf = '';
  formSubmitted = false;

  ufs = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT',
    'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO',
    'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  onSubmit() {
    // this.formSubmitted = true;

    // if (!this.uf || !this.produto) return;

    // console.log('Consulta enviada:', { uf: this.uf, produto: this.produto });
  }


}
