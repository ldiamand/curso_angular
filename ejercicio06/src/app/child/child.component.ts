import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private stopped = false;
  private counter = 0;
  private intervalId;
  
  constructor() { }
  
  ngOnInit() {
    this.intervalId = setInterval(() => { this.counter++ }, 1000);
  }
  
  stopTimer() {
    clearInterval(this.intervalId);
    this.stopped = true;
  }
}
