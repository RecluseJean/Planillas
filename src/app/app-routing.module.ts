import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  
  { path: '', component: InicioComponent, data: { title: 'Perfil – Planillas' } },
  { path: 'inicio', component: InicioComponent, data: { title: 'Perfil – Planillas' } },
  { path: 'login', component: LoginComponent, data: { title: 'Signin – Planillas' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
