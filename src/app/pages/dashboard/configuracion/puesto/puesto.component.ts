import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: []
})
export class PuestoComponent implements OnInit {

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
