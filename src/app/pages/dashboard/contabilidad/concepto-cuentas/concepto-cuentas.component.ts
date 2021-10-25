import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepto-cuentas',
  templateUrl: './concepto-cuentas.component.html',
  styleUrls: []
})
export class ConceptoCuentasComponent implements OnInit {

  viewGenerarR = false;
  viewConfigVP = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  ViewButtonConcepto(id:any){
    switch (id) {
      case 1:  
      this.viewGenerarR=false; 
      this.viewConfigVP=true;     
        break;

      case 2:
        this.viewGenerarR=true; 
        this.viewConfigVP=false;
        break;

      default:
        break;
    }
  }


}
