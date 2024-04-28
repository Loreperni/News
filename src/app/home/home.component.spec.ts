// home.component.spec.ts

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { APIService } from "../api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [APIService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize newsList, currentPage, and newsPerPage", () => {
    expect(component.newsList).toEqual([]);
    expect(component.currentPage).toBe(0);
    expect(component.newsPerPage).toBe(10);
  });

  it("should call loadNews() on component initialization", () => {
    spyOn(component, "loadNews");
    component.ngOnInit();
    expect(component.loadNews).toHaveBeenCalled();
  });

  // Add more tests for loadNews() and onLoadMore() methods
});
