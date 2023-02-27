import { TestBed } from '@angular/core/testing';

import { PostsServicesService } from './posts-services.service';

describe('PostsServicesService', () => {
  let service: PostsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
