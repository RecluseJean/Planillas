import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: []
})
export class DescuentosComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      nombre: 'ROLE_ADMIN'
    }
  ];

  viewNuevoDescuento = true;

  constructor() { }

  ngOnInit(): void {

  }

  ViewButtonDescuento(id:any){
    switch (id) {
      case 1:  
      this.viewNuevoDescuento=true;      
        break;

      case 2:
        this.viewNuevoDescuento=false;
        break;

      default:
        break;
    }
  }

}
