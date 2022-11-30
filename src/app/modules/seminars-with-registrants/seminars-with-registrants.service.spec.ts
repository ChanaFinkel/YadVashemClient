import { TestBed } from '@angular/core/testing';

import { SeminarWithRegistrantsService } from './seminars-with-registrants.service';

describe('RegistrantsService', () => {
  let service: SeminarWithRegistrantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeminarWithRegistrantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
