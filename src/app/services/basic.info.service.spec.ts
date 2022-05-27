import { TestBed } from '@angular/core/testing';

import { BasicInfoService } from './basic.info.service';

describe('Basic.InfoService', () => {
  let service: BasicInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
