import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { GestionPaginasComponent } from './administracion/gestion-paginas/gestion-paginas.component';
import { GestionUsuariosComponent } from './administracion/gestion-usuarios/gestion-usuarios.component';


import { AnioMesComponent } from './configuracion/anio-mes/anio-mes.component';
import { AreaEmpresaComponent } from './configuracion/area-empresa/area-empresa.component';
import { CentroCostoComponent } from './configuracion/centro-costo/centro-costo.component';
import { DepartamentoEmpresaComponent } from './configuracion/departamento-empresa/departamento-empresa.component';
import { DescuentosComponent } from './configuracion/descuentos/descuentos.component';
import { EmpresaComponent } from './configuracion/empresa/empresa.component';
import { EpsComponent } from './configuracion/eps/eps.component';
import { EscalonesQuintaComponent } from './configuracion/escalones-quinta/escalones-quinta.component';
import { HorariosComponent } from './configuracion/horarios/horarios.component';
import { PermisosComponent } from './configuracion/permisos/permisos.component';
import { PuestoComponent } from './configuracion/puesto/puesto.component';
import { RemuneracionesComponent } from './configuracion/remuneraciones/remuneraciones.component';
import { SctrComponent } from './configuracion/sctr/sctr.component';
import { SistemaPensionComponent } from './configuracion/sistema-pension/sistema-pension.component';
import { TipoPlanillaComponent } from './configuracion/tipo-planilla/tipo-planilla.component';
import { ParametrosComponent } from './configuracion/parametros/parametros.component';

import { ConceptoCuentasComponent } from './contabilidad/concepto-cuentas/concepto-cuentas.component';

import { ControlAsistenciaComponent } from './empleado/control-asistencia/control-asistencia.component';
import { DerechoHabientesComponent } from './empleado/derecho-habientes/derecho-habientes.component';
import { GestionTrabajadorComponent } from './empleado/gestion-trabajador/gestion-trabajador.component';
import { InfoTrabajadorComponent } from './empleado/gestion-trabajador/info-trabajador/info-trabajador.component';
import { SolicitudComponent } from './empleado/solicitud/solicitud.component';

import { GestionEquipoComponent } from './equipo/gestion-equipo/gestion-equipo.component';
import { ReclutamientoComponent } from './equipo/reclutamiento/reclutamiento.component';

import { AdelantoSueldoComponent } from './planillas/adelanto-sueldo/adelanto-sueldo.component';
import { GenerarPlanillaComponent } from './planillas/generar-planilla/generar-planilla.component';
import { GestionVacacionesComponent } from './planillas/gestion-vacaciones/gestion-vacaciones.component';
import { PrestamoComponent } from './planillas/prestamo/prestamo.component';

const routesDash : Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'administracion/gestion-paginas', pathMatch: 'full' },  

      { path: 'administracion', redirectTo: 'administracion/gestion-paginas', pathMatch: 'full' },  
      { path: 'configuracion', redirectTo: 'configuracion/escalones-quinta', pathMatch: 'full' }, 
      { path: 'contabilidad', redirectTo: 'contabilidad/concepto-cuentas', pathMatch: 'full' }, 
      { path: 'empleado', redirectTo: 'empleado/solicitud', pathMatch: 'full' },  
      { path: 'equipo', redirectTo: 'equipo/reclutamiento', pathMatch: 'full' }, 
      { path: 'planillas', redirectTo: 'planillas/gestion-vacaciones', pathMatch: 'full' }, 

      { path: 'administracion/gestion-paginas', component: GestionPaginasComponent},
      { path: 'administracion/gestion-usuarios', component: GestionUsuariosComponent},

      { path: 'configuracion/anio-mes', component: AnioMesComponent},
      { path: 'configuracion/area-empresa', component: AreaEmpresaComponent},
      { path: 'configuracion/centro-costo', component: CentroCostoComponent},
      { path: 'configuracion/departamento-empresa', component: DepartamentoEmpresaComponent},
      { path: 'configuracion/descuentos', component: DescuentosComponent},
      { path: 'configuracion/empresa', component: EmpresaComponent},
      { path: 'configuracion/eps', component: EpsComponent},
      { path: 'configuracion/escalones-quinta', component: EscalonesQuintaComponent},
      { path: 'configuracion/horarios', component: HorariosComponent},
      { path: 'configuracion/parametros', component: ParametrosComponent},
      { path: 'configuracion/permisos', component: PermisosComponent},
      { path: 'configuracion/puesto', component: PuestoComponent},
      { path: 'configuracion/remuneraciones', component: RemuneracionesComponent},
      { path: 'configuracion/sctr', component: SctrComponent},
      { path: 'configuracion/sistema-pension', component: SistemaPensionComponent},
      { path: 'configuracion/tipo-planilla', component: TipoPlanillaComponent},
      
      { path: 'contabilidad/concepto-cuentas', component: ConceptoCuentasComponent },  
      
      { path: 'empleado/control-asistencia', component: ControlAsistenciaComponent },
      { path: 'empleado/derecho-habientes', component: DerechoHabientesComponent },
      { path: 'empleado/gestion-trabajador', component: GestionTrabajadorComponent },
      { path: 'empleado/informacion-trabajador', component: InfoTrabajadorComponent},
      { path: 'empleado/solicitud', component: SolicitudComponent},

      { path: 'equipo/gestion-equipo', component: GestionEquipoComponent },
      { path: 'equipo/reclutamiento', component: ReclutamientoComponent },

      { path: 'planillas/adelanto-sueldo', component: AdelantoSueldoComponent },
      { path: 'planillas/generar-planilla', component: GenerarPlanillaComponent },
      { path: 'planillas/gestion-vacaciones', component: GestionVacacionesComponent },
      { path: 'planillas/prestamo', component: PrestamoComponent },
            
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesDash)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
