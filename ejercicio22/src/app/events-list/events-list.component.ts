import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

}
