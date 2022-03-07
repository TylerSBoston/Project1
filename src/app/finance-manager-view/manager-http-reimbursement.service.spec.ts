import { TestBed } from '@angular/core/testing';

import { ManagerHttpReimbursementService } from './manager-http-reimbursement.service';

describe('ManagerHttpReimbursementService', () => {
  let service: ManagerHttpReimbursementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerHttpReimbursementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
