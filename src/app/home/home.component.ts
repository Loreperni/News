import { Component, OnInit } from "@angular/core";
import { APIService } from "../api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  newsList: any[] = [];
  currentPage: number = 0;
  newsPerPage: number = 10;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.apiService.getLatestNewsIDs().subscribe((ids) => {
      const startIndex = this.currentPage * this.newsPerPage;
      const endIndex = startIndex + this.newsPerPage;
      const newsIDsToShow = ids.slice(startIndex, endIndex);

      for (const id of newsIDsToShow) {
        this.apiService.getNewsDetail(id).subscribe((newsDetail) => {
          this.newsList.push(newsDetail);
        });
      }
    });
  }

  onLoadMore(): void {
    this.currentPage++;
    this.loadNews();
  }
}
