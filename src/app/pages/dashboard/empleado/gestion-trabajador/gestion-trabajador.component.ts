import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-trabajador',
  templateUrl: './gestion-trabajador.component.html',
  styleUrls: []
})
export class GestionTrabajadorComponent implements OnInit {

  p : number = 1 ;
  CurrentPerfil:any = [
    { id: 1,
      nombre: 'ROLE_ADMIN'
    }
  ];

  viewDescription=false;
  viewMenuPlanillas=true;
  viewMenuReciboxHonorario=false;

  constructor( private cd:ChangeDetectorRef ) { }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked(){
    this.cd.detectChanges();
    this.viewDescription;
    this.viewMenuPlanillas;
    this.viewMenuReciboxHonorario;
  }

  ViewMenuPR(){
    switch (this.viewMenuPlanillas) {
      case true:   
        this.viewMenuPlanillas = false;
        this.viewMenuReciboxHonorario=true;
        break;   
      case false:  
        this.viewMenuPlanillas = true;  
        this.viewMenuReciboxHonorario=false;    
        break;  
      default:
        break;
    }
  
  }


  Descriptiontr(){    
    switch (this.viewDescription) {
      case false:  
        this.viewDescription = true;      
        break;
      case true:  
      setTimeout(()=>{                          
        this.viewDescription = false;      
      }, 350);      
        break;    
      default:
        break;
    }
  }

}
