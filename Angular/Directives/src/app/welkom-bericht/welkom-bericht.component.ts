import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welkom-bericht',
  templateUrl: './welkom-bericht.component.html',
  styleUrls: ['./welkom-bericht.component.css']
})
export class WelkomBerichtComponent implements OnInit {

  datum : Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
