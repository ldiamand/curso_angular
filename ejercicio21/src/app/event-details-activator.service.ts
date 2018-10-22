import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsActivatorService {

  constructor(private eventService:EventService, private router:Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    let event = this.eventService.getEvent(+route.params['eventId']);

    return !!event
  }
  
}
