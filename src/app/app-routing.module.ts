import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [  

  { path: 'signin', component: SignInComponent },   
  { path: '', redirectTo: 'signin', pathMatch: 'full' },  

  {
    path: ' ',
    loadChildren: () => import ('./pages/dashboard/dashboard.module').then(module =>module.DashboardModule)
  }, 




  /*
  { path: 'signin', component: SignInComponent },   

  { path: '', redirectTo: '/signin', pathMatch: 'full' },

  {
    path: 'administracion',
    loadChildren: () => import ('./pages/dashboard/administracion/administracion.module').then(m =>m.AdministracionModule)
  },

  {
    path: 'configuracion',
    loadChildren: () => import ('./pages/dashboard/configuracion/configuracion.module').then(m =>m.ConfiguracionModule)
  },

  {
    path: 'contabilidad',
    loadChildren: () => import ('./pages/dashboard/contabilidad/contabilidad.module').then(m =>m.ContabilidadModule)
  },

  {
    path: 'empleado',
    loadChildren: () => import ('./pages/dashboard/empleado/empleado.module').then(m =>m.EmpleadoModule)
  },

  {
    path: 'equipo',
    loadChildren: () => import ('./pages/dashboard/equipo/equipo.module').then(m =>m.EquipoModule)
  },

  {
    path: 'planillas',
    loadChildren: () => import ('./pages/dashboard/planillas/planillas.module').then(m =>m.PlanillasModule)
  }, 

*/

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

