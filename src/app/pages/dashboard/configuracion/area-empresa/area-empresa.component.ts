import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-empresa',
  templateUrl: './area-empresa.component.html',
  styleUrls: []
})
export class AreaEmpresaComponent implements OnInit {

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
