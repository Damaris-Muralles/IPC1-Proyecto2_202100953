import { Component, OnInit } from '@angular/core';
import { PokeInterface } from 'src/app/models/PokeInterface';
import { PokemonService } from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {

   
  constructor(public pokemonService: PokemonService) { }

//Arreglo para los pokemons
datosPoke: PokeInterface[] = [];
dato: string;
elementob:string=localStorage.getItem('elemento');
  ngOnInit(): void {
    this.ObtenerPokemonsporNombre(this.elementob);
  }
  ObtenerPokemonsporNombre(nomb:string){
    this.pokemonService.CargarDatosPorNombre(nomb).subscribe(async (res) =>
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
