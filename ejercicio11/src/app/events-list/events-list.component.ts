import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styles: [`
    button { padding: 4px; margin: -10px 0 0 10px; }
    h2 { display: inline-block; }
    .thumbnail { margin-top: 10px; padding-top: 5px; }
    .label { font-size: 14px; margin-bottom: 10px; display: inline-block; }
  `]
})
export class EventsListComponent implements OnInit {

  events = [
    {
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: {
        address: '1 London Road ',
        city: 'London',
        country: 'England'
      }
    },
    {
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      }
    },
    {
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      },
      onlineUrl: 'http://unangularsummit.org'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
