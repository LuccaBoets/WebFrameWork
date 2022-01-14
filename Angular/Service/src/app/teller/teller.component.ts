import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {

  teller = 0;

  constructor(private ShareService: ShareService) {  }

  ngOnInit(): void {
    this.ShareService.getTeller().subscribe((teller) => {
      this.teller = teller;
    });
  }

  add(): void {
    this.ShareService.add();
  }
}
