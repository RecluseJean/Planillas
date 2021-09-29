import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: []
})
export class AdministracionComponent implements OnInit {

  
  p : number = 1 ;
  CurrentLista:any = [
    {nombre: 'a'},
    {nombre: 'b'},
    {nombre: 'c'},
    {nombre: 'd'},
    {nombre: 'e'},
    {nombre: 'f'},
    {nombre: 'g'},
    {nombre: 'h'},
    {nombre: 'i'},
    {nombre: 'j'},
  ];

 
  constructor() { }

  ngOnInit(): void {

  }

}
