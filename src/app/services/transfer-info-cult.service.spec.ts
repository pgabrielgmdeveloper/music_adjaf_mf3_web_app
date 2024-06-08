import { TestBed } from '@angular/core/testing';

import { TransferInfoCultService } from './transfer-info-cult.service';

describe('TransferInfoCultService', () => {
  let service: TransferInfoCultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferInfoCultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
