import { TestBed } from '@angular/core/testing';

import { CentroCirurgicoService } from './centro-cirurgico.service';

describe('CentroCirurgicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentroCirurgicoService = TestBed.get(CentroCirurgicoService);
    expect(service).toBeTruthy();
  });
});
