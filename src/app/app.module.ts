import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";

//service
import { YoutubeService } from "../app/providers/youtube.service";
import { VideoYoutubePipe } from './pipes/video-youtube.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, VideoYoutubePipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
