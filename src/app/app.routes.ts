import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompanyComponent } from './pages/company/company.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatos', component: ContactComponent },
  { path: 'quem_somos', component: CompanyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirecionamento padrão para a página inicial
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
