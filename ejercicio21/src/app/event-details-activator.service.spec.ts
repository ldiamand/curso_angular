import { TestBed } from '@angular/core/testing';

import { EventDetailsActivatorService } from './event-details-activator.service';

describe('EventDetailsActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventDetailsActivatorService = TestBed.get(EventDetailsActivatorService);
    expect(service).toBeTruthy();
  });
});
