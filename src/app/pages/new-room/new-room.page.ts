import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PhotoService } from 'src/app/services/photo.service';
import {logging} from "protractor";
import {Router} from "@angular/router";
import {Photo} from "../../interfaces/photo";

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.page.html',
  styleUrls: ['./new-room.page.scss'],
})
export class NewRoomPage implements OnInit {

 public photos: Photo[] = [];
 public test= "zebi" ;

  constructor(
    private screenOrientation: ScreenOrientation,
    public photoService: PhotoService,
    private routerService: Router,
    ) {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE).then(); // lock on landscape mode
    } catch {
      console.log('screen orientation not supported on host');
    }
    this.photos = this.photoService.photos;
  }

  ngOnInit() {
  }

  async takePicture() {
    await this.photoService.takePicture();
    await this.routerService.navigate([`/room-editor`],{queryParams: {index: 0}});

  }
}
