import { TestBed } from '@angular/core/testing';

import { SimpleLoggerService } from './simple-logger.service';

describe('SimpleLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleLoggerService = TestBed.get(SimpleLoggerService);
    expect(service).toBeTruthy();
  });
});
