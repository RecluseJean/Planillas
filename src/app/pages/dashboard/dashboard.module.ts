import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

import { AdministracionComponent } from './administracion/administracion/administracion.component';
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
import { SolicitudComponent } from './empleado/solicitud/solicitud.component';

import { GestionEquipoComponent } from './equipo/gestion-equipo/gestion-equipo.component';
import { ReclutamientoComponent } from './equipo/reclutamiento/reclutamiento.component';

import { AdelantoSueldoComponent } from './planillas/adelanto-sueldo/adelanto-sueldo.component';
import { GenerarPlanillaComponent } from './planillas/generar-planilla/generar-planilla.component';
import { GestionVacacionesComponent } from './planillas/gestion-vacaciones/gestion-vacaciones.component';
import { PrestamoComponent } from './planillas/prestamo/prestamo.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    DashboardComponent,

    AdministracionComponent,
    GestionPaginasComponent,
    GestionUsuariosComponent,

    AnioMesComponent,
    AreaEmpresaComponent,
    CentroCostoComponent,
    DepartamentoEmpresaComponent,
    DescuentosComponent,
    EmpresaComponent,
    EpsComponent,
    EscalonesQuintaComponent,
    HorariosComponent,
    PermisosComponent,
    PuestoComponent,
    RemuneracionesComponent,
    SctrComponent,
    SistemaPensionComponent,
    TipoPlanillaComponent,
    ParametrosComponent,

    ConceptoCuentasComponent,
    ControlAsistenciaComponent,
    DerechoHabientesComponent,
    GestionTrabajadorComponent,
    SolicitudComponent,

    GestionEquipoComponent,
    ReclutamientoComponent,

    AdelantoSueldoComponent,
    GenerarPlanillaComponent,
    GestionVacacionesComponent,
    PrestamoComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,   
    DashboardRoutingModule,
    ComponentsModule
    
  ]
})
export class DashboardModule { }
