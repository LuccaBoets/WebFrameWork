import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input("min") min: number = 1
  @Input("max") max: number = 100
  getal: number = this.generateRandomNumber()

  constructor() {
    this.start()
  }

  ngOnInit(): void {
  }

  start(){
    setInterval(() => {this.getal = this.generateRandomNumber()},1000)
  }

  stop(){
    clearInterval()
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * this.max + this.min)
  }
}
