import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclutamiento',
  templateUrl: './reclutamiento.component.html',
  styleUrls: []
})
export class ReclutamientoComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      nombre: 'Reclutamiento 1'
    },
    { id: 2,
      nombre: 'Reclutamiento 2'
    },
    { id: 3,
      nombre: 'Reclutamiento 3'
    },
    { id: 4, 
      nombre: 'Reclutamiento 4'
    },
    { id: 5, 
      nombre: 'Reclutamiento 5'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
