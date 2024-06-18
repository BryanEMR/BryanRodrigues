import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompanyComponent } from './pages/company/company.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: '', component:ContactComponent, title:'Home'},
  {path: 'contatos', component: ContactComponent, title:'Contatos'},
  {path: 'quem_somos', component: CompanyComponent, title:"Quem Somos"},
];
