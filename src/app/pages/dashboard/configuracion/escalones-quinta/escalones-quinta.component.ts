import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escalones-quinta',
  templateUrl: './escalones-quinta.component.html',
  styleUrls: []
})
export class EscalonesQuintaComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      descripcion: 'Escalón 1',
      porcentaje: '8.00%',
      UITminimo: 0,
      UITmaximo: 5
    },
    { id: 2,
      descripcion: 'Escalón 2',
      porcentaje: '14.00%',
      UITminimo: 5,
      UITmaximo: 20
    },
    { id: 3,
      descripcion: 'Escalón 3',
      porcentaje: '17.00%',
      UITminimo: 20,
      UITmaximo: 35
    },
    
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
