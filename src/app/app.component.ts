import {Component, OnInit} from '@angular/core';
import {RoomsService} from "./services/rooms.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [];

  constructor(
    private roomService: RoomsService,
  ) {
  }

  ngOnInit(): void {
    this.appPages = this.roomService.getRoomsName().map(roomName => ({
      title: roomName,
      url: `/room/${roomName}`,
      icon: 'home'
    }));
  }

}
