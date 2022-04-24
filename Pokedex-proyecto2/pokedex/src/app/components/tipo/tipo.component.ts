import { Component, OnInit } from '@angular/core';
import { PokeInterface } from 'src/app/models/PokeInterface';
import { PokemonService } from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  constructor(public pokemonService: PokemonService) { }
//Arreglo para los pokemons
datosPoke: PokeInterface[] = [];
tipo1: boolean;
tipo2: boolean;
tipo3: boolean;
elementob:string=localStorage.getItem('elemento');
  ngOnInit(): void {
    this.ObtenerPokemonsporTipo(this.elementob);
    if(this.elementob=="Fuego"){
      this.tipo1= true;

    }else{
      this.tipo1= false;
    }
    if(this.elementob=="Agua"){
      this.tipo2= true;

    }else{
      this.tipo2= false;
    }
    if(this.elementob=="Planta"){
      this.tipo3= true;

    }else{
      this.tipo3= false;
    }
    console.log("color");
    console.log(this.tipo1);
    console.log(this.tipo2);
    console.log(this.tipo3);
  }

  ObtenerPokemonsporTipo(tipo:string){
   
    this.pokemonService.CargarDatosPorTipo(tipo).subscribe(async (res) =>
    {
      let valores: any = res;
      this.datosPoke = valores;
      console.log("LISTA DE DATOS");
      console.log(this.datosPoke);
    },
    err => console.log(err));
  }
}
