import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-planilla',
  templateUrl: './tipo-planilla.component.html',
  styleUrls: []
})
export class TipoPlanillaComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      nombre: 'ROLE_ADMIN'
    }
  ];

  viewAsignar = true;
  viewRevocar = false;

  constructor() { }

  ngOnInit(): void {
  }

  ViewButtonAR(id:any){
    switch (id) {
      case 1:
        this.viewAsignar = true;
        this.viewRevocar =false;
        break;
      case 2:
        this.viewAsignar = false;
        this.viewRevocar =true;
      break;
      default:
        break;
    }
  }

}
