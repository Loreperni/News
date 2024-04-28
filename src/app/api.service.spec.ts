// api.service.spec.ts

import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { APIService } from "./api.service";

describe("APIService", () => {
  let service: APIService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [APIService],
    });
    service = TestBed.inject(APIService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get latest news IDs", () => {
    const dummyIDs: number[] = [1, 2, 3];
    service.getLatestNewsIDs().subscribe((ids) => {
      expect(ids).toEqual(dummyIDs);
    });

    const req = httpMock.expectOne(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    expect(req.request.method).toBe("GET");
    req.flush(dummyIDs);
  });

  // Add more tests for getNewsDetail(id) method
});
