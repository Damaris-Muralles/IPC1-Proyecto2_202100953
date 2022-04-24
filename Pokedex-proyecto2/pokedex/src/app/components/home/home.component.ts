import { Component, OnInit } from '@angular/core';
import { PokeInterface } from 'src/app/models/PokeInterface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public pokemonService: PokemonService) { }

//Arreglo para los pokemons
datosPoke: PokeInterface[] = [];
datoalm: string;
ngOnInit(): void {
  this.ObtenerPokemons();
}

ObtenerPokemons(){
  this.pokemonService.CargarDatos().subscribe(async (res) =>
  {
    let valores: any = res;
    this.datosPoke = valores;
    console.log("LISTA DE DATOS");
    console.log(this.datosPoke);
  },
  err => console.log(err));
}
}
