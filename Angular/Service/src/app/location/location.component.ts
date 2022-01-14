import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  lat = 0;
  lng = 0;

  location = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.location = params['Location'] 
    });

    if(this.location == "mechelen"){
      this.mechelen();
    } else if(this.location == "antwerpen"){
      this.antwerpen();
    } else if(this.location == "brussel"){
      this.brussel();
    }
  }

  mechelen(): void{
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

  antwerpen(): void{
    this.lat = 60;
    this.lng = 7.809007;
  }

  brussel(): void{
    this.lat = 0;
    this.lng = 7.809007;
  }

}
