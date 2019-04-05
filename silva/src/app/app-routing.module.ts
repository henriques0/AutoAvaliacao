import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HenriqueComponent } from './henrique/henrique.component'
import { SobreComponent } from './sobre/sobre.component'

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'cadastro' , component: HenriqueComponent },
  {path: 'sobre' , component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
