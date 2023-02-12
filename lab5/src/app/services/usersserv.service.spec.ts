import { TestBed } from '@angular/core/testing';

import { UsersservService } from './usersserv.service';

describe('UsersservService', () => {
  let service: UsersservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
