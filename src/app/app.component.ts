import {Component, OnInit} from '@angular/core';
import {RoomsService} from './services/rooms.service';
import {PhotoService} from './services/photo.service';
import {Params} from '@angular/router';

interface Page {
  title: string;
  url: string;
  icon: string;
  params?: Params;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  appPages: Page[];

  constructor(
    private roomService: RoomsService,
    public photoService: PhotoService,
  ) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.appPages = this.roomService.rooms.map(room => ({
        title: room.name,
        url: encodeURI(`room-editor`),
        params: {
          index: room.id,
        },
        icon: 'home',
      }));
    }, 1000);
    this.appPages = this.roomService.rooms.map(room => ({
      title: room.name,
      url: `/room/${room.id}`,
      icon: 'home',
    }));
  }

}
