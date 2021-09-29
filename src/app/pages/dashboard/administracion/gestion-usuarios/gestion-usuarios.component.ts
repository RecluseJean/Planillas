import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: []
})
export class GestionUsuariosComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 111111,
      correo: 'example@gmail.com',
      rol: 'Role_admin',
      estado: 'Activo',
    },
    { id: 222222,
      correo: 'example@gmail.com',
      rol: 'Administrador',
      estado: 'Inactivo',
    },
    { id: 333333,
      correo: 'example@gmail.com',
      rol: 'Trabajador',
      estado: 'Activo',
    },
    { id: 444444, 
      correo: 'example@gmail.com',
      rol: 'Supervisor',
      estado: 'Inactivo',
    },
    { id: 555555, 
      correo: 'example@gmail.com',
      rol: 'Gerente RRHH',
      estado: 'Activo',
    },     
    { id: 666666, 
      correo: 'example@gmail.com',
      rol: 'Administrador',
      estado: 'Inactivo',
    },
    { id: 777777, 
      correo: 'example@gmail.com',
      rol: 'Supervisor',
      estado: 'Activo',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  
}
