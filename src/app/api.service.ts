import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class APIService {
  private baseUrl = "https://hacker-news.firebaseio.com/v0";

  constructor(private http: HttpClient) {}

  getLatestNewsIDs(): Observable<number[]> {
    const url = `${this.baseUrl}/newstories.json`;
    return this.http.get<number[]>(url);
  }

  getNewsDetail(id: number): Observable<any> {
    const url = `${this.baseUrl}/item/${id}.json`;
    return this.http.get<any>(url);
  }
}
