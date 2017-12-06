import { TestBed, inject } from '@angular/core/testing';

import { ReactiesService } from './reacties.service';

describe('ReactiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactiesService]
    });
  });

  it('should be created', inject([ReactiesService], (service: ReactiesService) => {
    expect(service).toBeTruthy();
  }));
});
