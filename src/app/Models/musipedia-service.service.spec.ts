import { TestBed } from '@angular/core/testing';

import { MusipediaService } from './musipedia.service';

describe('MusipediaService', () => {
  let service: MusipediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusipediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
