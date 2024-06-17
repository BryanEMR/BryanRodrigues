import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompanyComponent } from './pages/company/company.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contatos', component: ContactComponent},
  {path: 'quemSomos', component: CompanyComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
