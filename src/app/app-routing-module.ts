import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interface } from './interface/interface';
import { FAQ } from './faq/faq';
import { Articles } from './articles/articles';

const routes: Routes = [
{path:'', component:Interface
 
}  ,
{path:'FAQ', component:FAQ},
{path:'interface' , component:Interface},
{path:'articles', component:Articles}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
