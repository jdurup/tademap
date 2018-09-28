/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TiragesService } from './tirages.service';

describe('Service: Tirage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiragesService]
    });
  });

  it('should ...', inject([TiragesService], (service: TiragesService) => {
    expect(service).toBeTruthy();
  }));
});
