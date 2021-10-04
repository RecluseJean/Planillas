import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: []
})
export class SideBarComponent implements OnInit {

  titulo : any;
  identificador: any;
  //this.tokenstorageService.saveUser(data);
  //this.tokenstorageService.getUser()
  
    constructor( private TokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.tituloVerificación();
  }
  
  tituloVerificación(){
    if(this.TokenStorageService.getTitle()){
      this.titulo = this.TokenStorageService.getTitle();
    }else{
      this.titulo = 'Administración'
    }
  }
    
  viewTitulo(id:any){
    this.identificador = id;
    switch (this.identificador) {
      case 1:  
        this.titulo = 'Administración'
        this.TokenStorageService.saveTitle(this.titulo);
        break;

      case 2:  
      this.titulo = 'Empleado'  
      this.TokenStorageService.saveTitle(this.titulo);    
        break;

      case 3:  
      this.titulo = 'Planillas' 
      this.TokenStorageService.saveTitle(this.titulo);     
        break;

      case 4: 
      this.titulo = 'Contabilidad'  
      this.TokenStorageService.saveTitle(this.titulo);     
        break;

      case 5:  
      this.titulo = 'Equipo' 
      this.TokenStorageService.saveTitle(this.titulo);     
        break;

      case 6:  
      this.titulo = 'Configuración'
      this.TokenStorageService.saveTitle(this.titulo);      
        break;
      
      default:
        break;
    }
  }


}
