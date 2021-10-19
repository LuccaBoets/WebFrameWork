import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persoon',
  templateUrl: './persoon.component.html',
  styleUrls: ['./persoon.component.css']
})
export class PersoonComponent implements OnInit {

  people : Persoon[] = [new Persoon("Boets", "Lucca", "08/26/2002"), new Persoon("Meas", "Lewis", "08/13/2020") , new Persoon("naam", "voornaam", "05/03/2001")]

  constructor() {
    
   }

  ngOnInit(): void {
  }

}

class Persoon{
  readonly naam : string
  readonly voornaam : string
  readonly geboortedatum : string

  constructor(naam : string, voornaam : string, geboortedatum : string){
    this.naam = naam
    this.voornaam = voornaam
    this.geboortedatum = geboortedatum
  }

  leeftijd(){
    
    return (new Date()).getFullYear() - new Date(this.geboortedatum).getFullYear();
  }
}