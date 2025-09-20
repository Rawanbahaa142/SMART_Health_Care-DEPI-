import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interface } from './interface/interface';
import { FAQ } from './faq/faq';

const routes: Routes = [
{path:'', component:Interface
 
}  ,
{path:'FAQ', component:FAQ},
{path:'interface' , component:Interface}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
