import { TestBed, inject } from '@angular/core/testing';

import { ZoekertjesService } from './zoekertjes.service';

describe('ZoekertjesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZoekertjesService]
    });
  });

  it('should be created', inject([ZoekertjesService], (service: ZoekertjesService) => {
    expect(service).toBeTruthy();
  }));
});
