import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  directives: [ChildCmp]
})
export class ChildComponent implements OnInit {

  @ViewChild(ParentComponent) child: ParentComponent;

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // child is set
    this.child.start();
  }
}
