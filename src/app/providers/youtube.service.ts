import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private youtubeUrl: string = "https://www.googleapis.com/youtube/v3";
  private apiKey: string = "yourkey";
  private nextpageToken: string = "";

  constructor(public http: HttpClient) {}

  getVideos() {
    let params = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "10")
      .set("playlistId", "UUtJkNv0rghEOOiz87xT4C5A")
      .set("key", this.apiKey);

    let url = `${this.youtubeUrl}/playlistItems`;

    if (this.nextpageToken) {
      params = params.append("pageToken", this.nextpageToken);
    }
    return this.http.get(url, { params: params }).pipe(
      map((rest: any) => {
        this.nextpageToken = rest.nextPageToken;
        let videos: any[] = [];
        for (let video of rest.items) {
          let snippet = video.snippet;
          videos.push(snippet);
        }
        return videos;
      })
    );
  }
}
