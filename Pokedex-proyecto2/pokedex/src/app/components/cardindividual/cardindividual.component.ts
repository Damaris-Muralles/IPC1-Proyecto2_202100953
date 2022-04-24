import { Component, OnInit } from '@angular/core';
import { PokeInterface } from 'src/app/models/PokeInterface';
@Component({
  selector: 'app-cardindividual',
  templateUrl: './cardindividual.component.html',
  styleUrls: ['./cardindividual.component.css']
})
export class CardindividualComponent implements OnInit {

  constructor() { }
  
  
  
  ngOnInit(): void {
    console.log("------------")
    console.log(this.info);
    console.log("------------")

  }
  info:PokeInterface=JSON.parse(localStorage.getItem('datobuscado'));
}
