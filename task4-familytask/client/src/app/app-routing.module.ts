import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { AddnewComponent } from './addnew/addnew.component';


const routes: Routes = [
  {path: 'alltasks', component: AlltasksComponent},
  {path: 'addnew', component: AddnewComponent},
  {path: '', redirectTo: 'alltasks', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
