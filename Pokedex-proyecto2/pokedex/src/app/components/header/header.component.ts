import { Component, OnInit } from '@angular/core';
import{FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
import { PokeInterface } from 'src/app/models/PokeInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PokemonService } from 'src/app/service/pokemon.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opciones: string[] = ['Nombre de pokemon', 'Numero', 'Tipo', 'Todos'];
  default: string = 'Todos';

  opForm: FormGroup;
  selecForm= this.fb.group({
    search:[''],
  })
  
  busquedaobj: string;
  buscar: string=localStorage.getItem('elemento');
  datosuser:string;
 
  constructor(private fb:FormBuilder,public pokemonService: PokemonService, private router:Router) { 
   this.opForm = new FormGroup({
    datopc: new FormControl(null)
                    });
                 
                    this.opForm.controls['datopc'].setValue(this.default, 
                     {onlySelf: true});
                     
                
              this.opForm.get('datopc');
              
               }
  datosPoke: PokeInterface[] = [];
 
  
  ngOnInit(): void {
    localStorage.setItem('filtro', "Todos");
    this.datosuser=JSON.parse(localStorage.getItem('usuariosesion'));
    
  }
  datoalm: string=localStorage.getItem('filtro');

  onbusqueda(){
    localStorage.removeItem('filtro');
    localStorage.removeItem('elemento');
    
    console.log(this.datoalm);
    console.log(this.busquedaobj);
    if(this.datoalm=="Todos"){
          this.router.navigate(['home']);
          
    }
    if(this.datoalm=="Numero"){
      this.router.navigate(['numero'])
      localStorage.setItem('filtro', this.datoalm);
      localStorage.setItem('elemento', this.busquedaobj);
    
    }
    if(this.datoalm=="Nombre de pokemon"){
      this.router.navigate(['nombre'])
      localStorage.setItem('filtro', this.datoalm);
      localStorage.setItem('elemento', this.busquedaobj);
    
    }
    if(this.datoalm=="Tipo"){
      this.router.navigate(['tipo'])
      localStorage.setItem('filtro', this.datoalm);
      localStorage.setItem('elemento', this.busquedaobj);
    }


    
  }

    
  
  logout(){
    localStorage.clear();  }


}
