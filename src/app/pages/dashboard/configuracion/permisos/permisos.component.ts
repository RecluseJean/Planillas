import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: []
})
export class PermisosComponent implements OnInit {

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
