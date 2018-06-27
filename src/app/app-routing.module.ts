import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FbLoginComponent } from './fb-login/fb-login.component';

const routes: Routes = [
  { path: '', component: FbLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
