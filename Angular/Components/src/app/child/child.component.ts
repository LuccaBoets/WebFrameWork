import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  
})
export class ChildComponent implements OnInit {


  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // child is set
  }
}
