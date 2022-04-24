import { Component, OnInit } from '@angular/core';
import { PokeInterface } from 'src/app/models/PokeInterface';
import { PokemonService } from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.css']
})
export class NumeroComponent implements OnInit {

  constructor(public pokemonService: PokemonService) { }
  elementob:string=localStorage.getItem('elemento');
  //Arreglo para los pokemons
  datosPoke: PokeInterface[] = [];
  dato: string;
  ngOnInit(): void {
    this.ObtenerPokemonsporId(this.elementob);
  }
  ObtenerPokemonsporId(id:string){
    this.pokemonService.CargarDatosPorNumero(id).subscribe(async (res) =>
    {
      localStorage.removeItem('datobuscado');
      let valores: any = res;
      this.datosPoke = valores;
      localStorage.setItem('datobuscado',JSON.stringify(this.datosPoke));
      console.log("LISTA DE DATOS");
      console.log(this.datosPoke);
    },
    err => console.log(err));
  }
}
