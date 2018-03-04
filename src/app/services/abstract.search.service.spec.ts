import { TestBed, inject } from '@angular/core/testing';

import { AbstractSearchService } from './abstract.search.service';

import { User } from "../models/user"

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractSearchService]
    });
  });

  it('should be created',
    inject([AbstractSearchService], (service: AbstractSearchService<User>) => {
      expect(service).toBeTruthy();
    }));
});
