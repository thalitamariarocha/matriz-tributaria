import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home-component/home-component';
import { LoginComponent } from './componentes/login-component/login-component';
import { CadastroProdutoComponent } from './componentes/cadastro-produto-component/cadastro-produto-component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    {path: 'cadastrar', component: CadastroProdutoComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
    
];
