import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento-empresa',
  templateUrl: './departamento-empresa.component.html',
  styleUrls: []
})
export class DepartamentoEmpresaComponent implements OnInit {

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
