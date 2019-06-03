import { TestBed } from '@angular/core/testing';

import { OwnAPIService } from './own-api.service';

describe('OwnAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnAPIService = TestBed.get(OwnAPIService);
    expect(service).toBeTruthy();
  });
});
