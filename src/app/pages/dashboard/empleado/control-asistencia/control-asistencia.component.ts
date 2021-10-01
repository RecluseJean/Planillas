import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-asistencia',
  templateUrl: './control-asistencia.component.html',
  styleUrls: []
})
export class ControlAsistenciaComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      nombre: 'ROLE_ADMIN'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
