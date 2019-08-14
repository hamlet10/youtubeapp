import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private youtubeUrl: string = "https://www.googleapis.com/youtube/v3";
  private apiKey: string = "AIzaSyCZL1WZWgAUEyEpPdynPIgcq7xI_3hi6EY";
  private nextpageToken: string = "";

  params = new HttpParams()
    .set("part", "snippet")
    .set("maxResults", "10")
    .set("playlistId", "UUtJkNv0rghEOOiz87xT4C5A")
    .set("key", this.apiKey);

  constructor(public http: HttpClient) {}

  getVideos() {
    let url = `${this.youtubeUrl}/playlistItems`;
    if (this.nextpageToken) {
      this.params = this.params.append("pageToken", this.nextpageToken);
    }
    return this.http.get(url, { params: this.params }).pipe(
      map((rest: any) => {
        console.log(rest);
        this.nextpageToken = rest.nextPageToken;
        let videos: any[] = [];
        console.log(this.nextpageToken);

        for (let video of rest.items) {
          let snippet = video.snippet;
          videos.push(snippet);
        }
        return videos;
      })
    );
  }
}
