import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weer',
  templateUrl: './weer.component.html',
  styleUrls: ['./weer.component.css']
})
export class WeerComponent implements OnInit {

  weerBericht: weer[] = []
  locatiesOfCity: string[]
  constructor() {
    this.locatiesOfCity = ["Brussel", "Antwerpen", "Mechelen", "Gent", "Leuven"]

    
    var count : number = 0;
    this.locatiesOfCity.forEach(locatie => {
      this.weerBericht[count] = { temperatuur: Math.round(Math.random()*25+1), locatie: locatie }
      count++
    });

    console.log("test")
    //his.weerBericht[0].temperatuur

    setInterval(() => {
      this.weerBericht.forEach(weer => {
        weer.temperatuur = Math.round(Math.random()*25+1)
      });
    },2000)

  }


  ngOnInit(): void {
  }

}

class weer {
  temperatuur: number;
  locatie: string;

  constructor(temperatuur: number , locatie: string) {
    this.temperatuur = temperatuur
    this.locatie = locatie
  }
}
