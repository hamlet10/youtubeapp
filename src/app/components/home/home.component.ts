import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../providers/youtube.service";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSel: any;

  constructor(public yts: YoutubeService) {
    this.yts.getVideos().subscribe(rest => {
      this.videos = rest;
    });
  }

  verVideo(video: any) {
    this.videoSel = video;
    $("#exampleModal").modal("show");
  }

  cerrarModal() {
    this.videoSel = null;
    $("#exampleModal").modal("hide");
  }

  cargarVideos() {
    this.yts.getVideos().subscribe(rest => {
      this.videos = rest;
    });
  }
  ngOnInit() {}
}
