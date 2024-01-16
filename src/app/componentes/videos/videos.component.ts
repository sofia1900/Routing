import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

  constructor(private router : Router) {}

  volverInicio(){
    this.router.navigate([''])
  }
}
