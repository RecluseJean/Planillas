import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-paginas',
  templateUrl: './gestion-paginas.component.html',
  styleUrls: []
})
export class GestionPaginasComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      nombre: 'ROLE_ADMIN'
    },
    { id: 2,
      nombre: 'Administrador'
    },
    { id: 3,
      nombre: 'Trabajador'
    },
    { id: 4, 
      nombre: 'Supervisor'
    },
    { id: 5, 
      nombre: 'Gerente de Recursos Humanos'
    },     
    { id: 6, 
      nombre: 'Supervisor'
    },
    { id: 7, 
      nombre: 'Gerente de Recursos Humanos'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
