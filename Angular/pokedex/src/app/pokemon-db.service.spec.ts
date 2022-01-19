import { TestBed } from '@angular/core/testing';

import { PokemonDBService } from './pokemon-db.service';

describe('PokemonDBService', () => {
  let service: PokemonDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
