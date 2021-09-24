import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { ConfiguracionComponent } from './modulos/configuracion/configuracion.component';
import { ContabilidadComponent } from './modulos/contabilidad/contabilidad.component';
import { EquipoComponent } from './modulos/equipo/equipo.component';
import { PlanillasComponent } from './modulos/planillas/planillas.component';
import { RrhhComponent } from './modulos/rrhh/rrhh.component';
import { TrabajadorComponent } from './modulos/trabajador/trabajador.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministracionComponent,
    ConfiguracionComponent,
    ContabilidadComponent,
    EquipoComponent,
    PlanillasComponent,
    RrhhComponent,
    TrabajadorComponent,
    InicioComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
