import { TestBed } from '@angular/core/testing';

import { OWServiceService } from './owservice.service';

describe('OWServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OWServiceService = TestBed.get(OWServiceService);
    expect(service).toBeTruthy();
  });
});
