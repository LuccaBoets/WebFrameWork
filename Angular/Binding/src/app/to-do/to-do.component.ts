import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  tasks: string[] = []

  constructor() { 
    this.tasks[0] = "test1"
    this.tasks[1] = "test2"
  }

  ngOnInit(): void {
  }

  addTask(task: string): void {
    this.tasks[this.tasks.length] = task
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1)
  }
}
