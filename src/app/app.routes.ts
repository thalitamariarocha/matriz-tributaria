import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home-component/home-component';
import { LoginComponent } from './componentes/login-component/login-component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
    
];
