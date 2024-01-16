import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.css'
})
export class ImagenesComponent {
  constructor(private router : Router) {}

  volverInicio(){
    this.router.navigate([''])
  }
}
