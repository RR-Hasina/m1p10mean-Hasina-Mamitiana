import { TestBed } from '@angular/core/testing';

import { BonsortieService } from './bonsortie.service';

describe('BonsortieService', () => {
  let service: BonsortieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonsortieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
