import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styles: [`
    .legend span { padding-right: 30px; }
    .in-person { color: green; }
    .online { color: red; }
    .tbd { color: #aaa; }
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
      },
      format: "InPerson"
    },
    {
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      onlineUrl: 'https://www.ng-conf.org/',
      format: "Online"
    },
    {
      name: 'Future Conf (Location/Url TBD)',
      date: '6/10/2037',
      time: '8am'
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
      format: "InPerson"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
