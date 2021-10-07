import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remuneraciones',
  templateUrl: './remuneraciones.component.html',
  styleUrls: []
})
export class RemuneracionesComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      nombre: 'ROLE_ADMIN'
    }
  ];

  viewNuevaRemuneracion = true;

  constructor() { }

  ngOnInit(): void {
  }

  ViewButtonRemuneracion(id:any){
    switch (id) {
      case 1:  
      this.viewNuevaRemuneracion=true;      
        break;

      case 2:
        this.viewNuevaRemuneracion=false;
        break;

      default:
        break;
    }
  }

}
