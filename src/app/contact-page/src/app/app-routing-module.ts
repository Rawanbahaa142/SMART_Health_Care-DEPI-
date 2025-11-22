import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interface } from './interface/interface';
import { FAQ } from './faq/faq';
import { Articles } from './articles/articles';
import { Services } from './services/services';
import { Main } from './dashboard/main/main';
import { Dashboard } from './User/Pages/dashboard/dashboard';

const routes: Routes = [
{path:'', component:Interface}  ,
{path:'FAQ', component:FAQ},
{path:'interface' , component:Interface},
{path:'articles', component:Articles},
{path:'services' , component:Services},
{path: 'doctors-dashboard' , component : Main},
{path:'dashboard' , component:Dashboard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
