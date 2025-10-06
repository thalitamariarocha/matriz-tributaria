import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Cabecalho } from "./componentes/cabecalho/cabecalho";
//import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { HeaderComponent } from "./componentes/header-component/header-component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('matriz-tributaria');
}
