import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css'],
  standalone: true,
})
export class HomeComponent {

   form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      uf: ['', Validators.required],
      produto: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // força exibição dos erros
      return;
    }

    // TODO forma de consulta (redirecionar pag aqui)
    console.log(this.form.value);
  }

}
