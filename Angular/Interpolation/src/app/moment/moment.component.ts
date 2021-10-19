import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';


@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  startTime: Moment = moment()
  time: string = moment().fromNow();

  constructor() {

    moment.updateLocale('en', {
      relativeTime: {
        future: "in %s",
        past:   "%s ago",
        s  : number=> number + "s ",
        ss : '%d seconds',
        m:  number=> number + " minute ",
        mm: "%d minutes",
        h:  "an hour",
        hh: "%d hours",
        d:  "a day",
        dd: "%d days",
        w:  "a week",
        ww: "%d weeks",
        M:  "a month",
        MM: "%d months",
        y:  "a year",
        yy: "%d years"
    }
    });

    setInterval(() => {
      this.time = this.startTime.fromNow();
    }, 1000)

  }

  ngOnInit(): void {
  }

}
