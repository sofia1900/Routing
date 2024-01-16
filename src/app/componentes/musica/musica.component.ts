import {Component, OnInit} from '@angular/core';
import {Musica} from "../../modelos/musica";
import {MusicaService} from "../../services/musica.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent implements OnInit {

  musica : Musica[] = [];

  constructor(private service : MusicaService, private router : Router) {}

  ngOnInit () {
    this.service.getMusica().subscribe( music =>
      this.musica = music
    )
  }

  volverInicio(){
    this.router.navigate([''])
  }

}
