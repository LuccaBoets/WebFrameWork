import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {

  getal: number = Math.floor(Math.random()*100 + 1)

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.getal =  Math.floor(Math.random()*100 + 1)
    },2000)
  }

}
