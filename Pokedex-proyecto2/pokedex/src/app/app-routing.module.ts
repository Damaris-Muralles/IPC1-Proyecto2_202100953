import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NombreComponent } from './components/nombre/nombre.component';
import { NumeroComponent } from './components/numero/numero.component';
import { TipoComponent } from './components/tipo/tipo.component';
const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'nombre',
    component: NombreComponent
  },
  {
    path:'numero',
    component: NumeroComponent
  }
  ,
  {
    path:'tipo',
    component: TipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
