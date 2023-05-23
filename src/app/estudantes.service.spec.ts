import { TestBed } from '@angular/core/testing';

import { EstudanteService } from './estudantes.service';

describe('EstudantesService', () => {
  let service: EstudanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
