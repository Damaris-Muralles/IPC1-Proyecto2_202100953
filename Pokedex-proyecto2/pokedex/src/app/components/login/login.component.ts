
import { Component, OnInit } from '@angular/core';
import{FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
import { usersesion } from 'src/app/models/usersesion';
import Swal from 'sweetalert2'
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= this.fb.group({
    username:[''],
    password:['']
  })
  constructor(private fb:FormBuilder,public pokemonService: PokemonService, private router:Router) { }
//Arreglo para usuario
datosuser: usersesion[];

  ngOnInit(): void {
    
  }

  onLogin(): void{
    this.pokemonService.Cargarusuarios().subscribe(res =>
    {
      const user = res.find((a:any)=>{
        return a.Usuario==this.loginForm.value.username&& a.Password==this.loginForm.value.password
      });
      if(user){
      
        let datosuser=[];
        datosuser.push(this.loginForm.value.username);

        localStorage.setItem('usuariosesion',JSON.stringify(datosuser));
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'Los datos no coinciden',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        
      }
    }, err=>{Swal.fire({
      title: 'Error!',
      text: 'No se ha podido realizar la acción',
      icon: 'error',
      confirmButtonText: 'Ok'
    })})

    
  }
}
