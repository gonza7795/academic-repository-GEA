import {  ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    scrollAnimation
  ]

})
export class AboutComponent extends ScrollAnimationComponent implements OnInit {

  constructor(_el:ElementRef, cdRef:ChangeDetectorRef) { super(_el, cdRef)}
  title: string = "Gonzalo Alvarez";
  paragraph: string = 
  
  " Engineer and Doctor in Engineering. Coordinator and Developer of projects in several fields of engineering: processes, products, optimization, programming in several languages"+

  

  "                           //             -----             //                                 "+
  
  "Ingeniero y Doctor en Ingeniería. Coordinador y Desarrollador de Proyectos en diversas ramas de la ingeniería: procesos, productos, optimización, programación en varios lenguajes ";
 
  ngOnInit() {}

}
