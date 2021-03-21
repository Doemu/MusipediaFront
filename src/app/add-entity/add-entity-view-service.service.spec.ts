import { TestBed } from '@angular/core/testing';

import { AddEntityViewServiceService } from './add-entity-view-service.service';

describe('AddEntityViewServiceService', () => {
  let service: AddEntityViewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEntityViewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
