import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derecho-habientes',
  templateUrl: './derecho-habientes.component.html',
  styleUrls: []
})
export class DerechoHabientesComponent implements OnInit {

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
