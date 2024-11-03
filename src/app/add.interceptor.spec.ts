import { TestBed } from '@angular/core/testing';

import { AddInterceptor } from './add.interceptor';

describe('AddInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddInterceptor = TestBed.inject(AddInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
