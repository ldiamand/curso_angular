import { Routes } from '@angular/router'

import { EventsListComponent} from './events-list/events-list.component';

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent},
  { path: '', redirectTo: '/events', pathMatch:'full' },
]
