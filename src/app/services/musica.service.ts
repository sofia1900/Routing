import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Musica} from "../modelos/musica";
import {Observable} from "rxjs";
import {MusicaComponent} from "../componentes/musica/musica.component";

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  url = "https://rememora.sitehub.es/api/v1/music/music.json"
  constructor(private http : HttpClient) { }

  getMusica () : Observable<Musica[]> {
    return this.http.get<Musica[]>(this.url)
  }
}
