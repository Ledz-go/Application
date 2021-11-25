import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhotoService} from "../../services/photo.service";
import {Photo} from "../../interfaces/photo";

@Component({
  selector: 'app-room-editor',
  templateUrl: './room-editor.page.html',
  styleUrls: ['./room-editor.page.scss'],
})
export class RoomEditorPage implements OnInit {
  public index = "";
  public photo: Photo;

  constructor(private route: ActivatedRoute, public photoService: PhotoService) { }

  async ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.index = params.get('index');
      this.photo = this.photoService.photos[this.index];
    });
  }

}
