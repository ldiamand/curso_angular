import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  theDate = new Date(2035, 3, 1, 14, 15);

  constructor() { }

  ngOnInit() {
  }

}

