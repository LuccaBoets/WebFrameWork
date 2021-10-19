import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultaat',
  templateUrl: './resultaat.component.html',
  styleUrls: ['./resultaat.component.css']
})
export class ResultaatComponent implements OnInit {

  punt: number | undefined

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.punt = Math.round(Math.random() * 10)
    }, 2000)

  }

}
