import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welkom',
  templateUrl: './welkom.component.html',
  styleUrls: ['./welkom.component.css']
})
export class WelkomComponent implements OnInit {

  photos:string[] = []
  photo:string = "https://images.pexels.com/photos/3757136/pexels-photo-3757136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

  constructor() {

    this.photos.push("https://images.pexels.com/photos/3757136/pexels-photo-3757136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    this.photos.push("https://images.pexels.com/photos/7224145/pexels-photo-7224145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    this.photos.push("https://images.pexels.com/photos/9336603/pexels-photo-9336603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")

   }

  ngOnInit(): void {
  }

  option(value: string){
    this.photo = value
  }
}
