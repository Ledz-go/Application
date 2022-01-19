import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IRoom} from "../../interfaces/room";
import {RoomsService} from "../../services/rooms.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  public index: number = 0;
  public room: IRoom;

  constructor(
    private route: ActivatedRoute,
    private roomsService: RoomsService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = +params['index'];
      this.room = this.roomsService.rooms[this.index];
    });
  }

}
