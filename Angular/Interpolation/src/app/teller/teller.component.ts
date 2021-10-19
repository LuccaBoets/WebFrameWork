import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {

  getal: number = 0

  constructor() {
    setInterval(() => {
      this.getal++;
    }, 1000);
  }

  ngOnInit(): void {
  }

}
