import { TestBed, async, inject } from '@angular/core/testing';

import { UserIsLoginGuard } from './user-is-login.guard';

describe('UserIsLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserIsLoginGuard]
    });
  });

  it('should ...', inject([UserIsLoginGuard], (guard: UserIsLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
