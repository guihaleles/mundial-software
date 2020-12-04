import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { Salesman } from 'src/app/models/salesman';

describe('HttpService', () => {
  let service: HttpService<Salesman>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
