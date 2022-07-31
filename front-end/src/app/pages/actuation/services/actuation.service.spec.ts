/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActuationService } from './actuation.service';

describe('Service: Actuation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActuationService]
    });
  });

  it('should ...', inject([ActuationService], (service: ActuationService) => {
    expect(service).toBeTruthy();
  }));
});
