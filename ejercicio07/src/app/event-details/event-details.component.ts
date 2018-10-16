import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    location: {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA'
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
