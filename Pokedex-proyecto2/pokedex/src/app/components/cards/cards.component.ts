import { Component, Input, OnInit } from '@angular/core';
import { PokeInterface } from 'src/app/models/PokeInterface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  
 
  @Input() datoPoke : PokeInterface;
 
  
  ngOnInit(): void {
    console.log("------------")
    console.log(this.datoPoke);
    console.log("------------")

  }

}
