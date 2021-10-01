import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-trabajador',
  templateUrl: './gestion-trabajador.component.html',
  styleUrls: []
})
export class GestionTrabajadorComponent implements OnInit {

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
