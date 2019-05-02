import { TestBed } from '@angular/core/testing';

import { OpenbarService } from './openbar.service';

describe('OpenbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenbarService = TestBed.get(OpenbarService);
    expect(service).toBeTruthy();
  });
});
