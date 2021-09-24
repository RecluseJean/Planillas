import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionComponent } from './administracion/administracion.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PlanillasComponent } from './planillas/planillas.component';
import { RrhhComponent } from './rrhh/rrhh.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';

@NgModule({
  declarations: [
    AdministracionComponent,
    ConfiguracionComponent,
    ContabilidadComponent,
    EquipoComponent,
    PlanillasComponent,
    RrhhComponent,
    TrabajadorComponent
    
  ],
  imports: [
    CommonModule
  ]
})
export class ModulosModule { }
