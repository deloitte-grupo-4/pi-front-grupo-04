import { TestBed } from '@angular/core/testing';

import { FormProductServiceService } from './form-product-service.service';

describe('FormProductServiceService', () => {
  let service: FormProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
