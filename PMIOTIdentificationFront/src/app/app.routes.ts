import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FichajesComponent } from './fichajes/fichajes.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'fichajes', component: FichajesComponent }, 
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }