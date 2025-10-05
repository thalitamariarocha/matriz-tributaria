import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Cabecalho } from "./componentes/cabecalho/cabecalho";
//import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { HeaderComponent } from "./componentes/header-component/header-component";
import { HomeComponent } from "./componentes/home-component/home-component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('matriz-tributaria');
}
