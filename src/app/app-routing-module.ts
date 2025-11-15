import { ContactPage } from './contact-page/contact-page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interface } from './interface/interface';
import { FAQ } from './faq/faq';
import { Articles } from './articles/articles';
import { Services } from './services/services';
import { Main } from './dashboard/main/main';
import { Dashboard } from './User/Pages/dashboard/dashboard';
import { Doctors } from './User/Pages/doctors/doctors';
import { OneArticle } from './one-article/one-article';
import { DoctorInfo } from './User/Pages/doctor-info/doctor-info';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Patients } from './dashboard/patients/patients';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: Interface },
  { path: 'FAQ', component: FAQ },
  { path: 'interface', component: Interface },
  { path: 'articles', component: Articles },
  { path: 'services', component: Services },
  { path: 'doctors-dashboard', component: Main },
  { path: 'dashboard', component: Dashboard },
  { path: 'login', component: Login },
  {path:'contact', component:ContactPage},

{path:'doctors' , component:Doctors},
{path:"one-article" , component:OneArticle},
{path:"doctor-info/:id" , component:DoctorInfo},
{path: 'doctors-dashboard/patients' , component : Patients},
{path:'dashboard' , component:Dashboard},
  {path:'signUp' , component:SignUp}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
