import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  obs;
  result;
  promise;

  constructor() { 
    this.obs = of(35);
  }

  ngOnInit() {
    // put code here
  }

  listen() {
    this.promise.then((val) => {
      this.result = val;
    })
  }
  
}
