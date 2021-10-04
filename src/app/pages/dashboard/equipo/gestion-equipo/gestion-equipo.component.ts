import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-equipo',
  templateUrl: './gestion-equipo.component.html',
  styleUrls: []
})
export class GestionEquipoComponent implements OnInit {
  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      nombre: 'ROLE_ADMIN'
    }
  ];

  viewCrearEquipo = true;

  constructor() { }

  ngOnInit(): void {
  }

  VerBotonCrear(){
    this.viewCrearEquipo = true;
  }

  EsconderBotonCrear(){
    this.viewCrearEquipo = false;
  }

}
