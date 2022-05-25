import { TestBed } from '@angular/core/testing';

import { Basic.InfoService } from './basic.info.service';

describe('Basic.InfoService', () => {
  let service: Basic.InfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Basic.InfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
