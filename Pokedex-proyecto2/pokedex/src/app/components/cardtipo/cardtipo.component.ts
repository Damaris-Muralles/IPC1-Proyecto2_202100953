import { Component,Input, OnInit } from '@angular/core';
import { PokeInterface } from 'src/app/models/PokeInterface';
@Component({
  selector: 'app-cardtipo',
  templateUrl: './cardtipo.component.html',
  styleUrls: ['./cardtipo.component.css']
})
export class CardtipoComponent implements OnInit {

  constructor() { }

 
  @Input() datoPoke : PokeInterface;
 
  
  ngOnInit(): void {
    console.log("------------")
    console.log(this.datoPoke);
    console.log("------------")

  }
}
