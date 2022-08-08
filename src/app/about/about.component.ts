import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "Gonzalo Alvarez";
  paragraph: string = 
  
  " Engineer and Doctor in Engineering. Coordinator and Developer of projects in several fields of engineering: processes, products, optimization, programming in several languages"+

  

  "                           //             -----             //                                 "+
  
  "Ingeniero y Doctor en Ingeniería. Coordinador y Desarrollador de Proyectos en diversas ramas de la ingeniería: procesos, productos, optimización, programación en varios lenguajes ";
 
  ngOnInit() {}

}
