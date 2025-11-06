import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // raíz muestra Home
  { path: 'inicio', component: HomeComponent }, // opcional alias /inicio
];
