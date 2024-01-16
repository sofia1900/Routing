import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  constructor(private router : Router) {}

  moverMusica(){
    this.router.navigate(['/musica'])
  }

  moverImagenes(){
    this.router.navigate(['/imagenes'])
  }

  moverVideos(){
    this.router.navigate(['/videos'])
  }

}
