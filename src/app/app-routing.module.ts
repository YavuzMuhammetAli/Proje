import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KayitComponent } from './pages/kayit/kayit.component';

const routes: Routes = [
  { path: '', component: KayitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
