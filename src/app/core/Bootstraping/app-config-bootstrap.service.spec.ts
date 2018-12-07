import { TestBed } from '@angular/core/testing';

import { AppConfigBootstrapService } from './app-config-bootstrap.service';

describe('AppConfigBootstrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppConfigBootstrapService = TestBed.get(AppConfigBootstrapService);
    expect(service).toBeTruthy();
  });
});
