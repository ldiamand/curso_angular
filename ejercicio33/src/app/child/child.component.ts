import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() quantity: number = 0;
  squaredQuantity: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
