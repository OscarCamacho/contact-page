import { TestBed } from '@angular/core/testing';

import { SkillbridgeService } from './skillbridge.service';

describe('SkillbridgeService', () => {
  let service: SkillbridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillbridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
