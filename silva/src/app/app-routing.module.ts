import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HenriqueComponent } from './henrique/henrique.component'

const routes: Routes = [
  {path: '', component: HenriqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
